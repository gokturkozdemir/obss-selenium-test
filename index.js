require('chromedriver');
const { By } = require('selenium-webdriver');
const { until } = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://obss.com.tr/');

const seleniumAutomationTest = async () => {


    const acceptButton = await driver.findElement(By.id('cookieAcceptance'));
    await acceptButton.click();

    const searchIcon = await driver.findElement(By.id('search-icon'));
    await searchIcon.click();

    const searchBox = await driver.findElement(By.id('search-box'));
    await searchBox.click();
    await searchBox.sendKeys("Automation");
    await searchBox.sendKeys(Key.ENTER);

    await driver.wait(until.elementLocated(By.xpath('/html/body/div[3]/div/div[2]/div/div[2]/article[1]/h2/a')), 5 * 1000).then(automationLinkElement => {
        automationLinkElement.click();
    });

    await driver.wait(until.elementLocated(By.xpath('/html/body/div[4]/div/div/footer')), 5 * 1000).then(async (footer) => {
        const result = await footer.getTagName();
        if (result === 'footer') {
            console.log("Footer founded!")
        }
    });



}

seleniumAutomationTest() 