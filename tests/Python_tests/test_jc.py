import re
from playwright import Page, expect



def test_jc_login(page: Page):
    page.goto("https://console.jumpcloud.com/login/admin")
    expect(page).to_have_title(re.compile("JumpCloud Admin Portal"))

    # Enter username and password
    page.fill("input[name=\"email\"]", "jasonhilimire+radius_prod@gmail.com")
    page.fill("input[name=\"password\"]", ";vN|n&%H+l2IsS#kuGnpuNA5%n08+wVj*")

    # Click the login button
    page.get_by_role("button", name="Administrator Login").click()


    # Expect a title "to contain" a substring.
    expect(page).to_have_url(re.compile("https://console.jumpcloud.com/#/home"))

    _home_ = page.get_by_role("heading", name="Home")
    expect(_home_).to_be_visible()
