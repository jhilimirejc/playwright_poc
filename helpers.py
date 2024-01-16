import re
from playwright.sync_api import Page, expect
import secrets

def login(page: Page):
    page.goto("https://console.jumpcloud.com/login/admin")
    page.fill("input[name=\"email\"]", secrets.EMAIL)
    page.fill("input[name=\"password\"]", secrets.PASSWORD)
    page.get_by_role("button", name="Administrator Login").click()

    # Expect a title "to contain" a substring.
    expect(page).to_have_url(re.compile("https://console.jumpcloud.com/#/home"))

    _home_ = page.get_by_role("heading", name="Home")
    expect(_home_).to_be_visible()