import {test, expect, type Page} from '@playwright/test'
import { ElementContainer } from '../pages/elementContainer';
import menuData from "../testData/menuItems.json";

let container: ElementContainer;
let linkText;


test.beforeEach(async ({page}) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    container = new ElementContainer(page);
});

test.describe.skip('Verify all Element Container Links', () => {

    test('Verify Platform menu Links', async ({page}) => {
        const links = await container.platformMenu.locator('xpath=..').locator('span.elementor-icon-list-text').all();

        for (const link of links){
            linkText = await container.openLink(link, container.platformMenu);
            expect.soft(await page.title()).toContain(linkText.split(' ')[0]);
        }
    });

    test('Verify Features menu Links', async ({page}) => {        
        const links = await container.featuresMenu.locator('xpath=..').locator('span.elementor-icon-list-text').all();

        for (const link of links){
            linkText = await container.openLink(link, container.featuresMenu);
            expect.soft(await page.title()).toContain(linkText.split(' ')[0]);
        }
    });

    test('Verify Use Cases menu Links', async ({page}) => {
        const links = await container.useCasesMenu.locator('xpath=..').locator('span.elementor-icon-list-text').all();

        for (const link of links){
            linkText = await container.openLink(link, container.useCasesMenu);
            expect.soft(await page.title()).toContain(linkText.split(' ')[0]);
        }
    });

    test('Verify Pricing menu Links', async ({page}) => {
        let linkText;

        await container.pricing.click();
        await page.waitForLoadState('load');
        expect.soft(await page.title()).toContain('Pricing');
    });

    test('Verify Resources menu Links', async ({page}) => {
        const links = await container.resourcesMenu.locator('xpath=..').locator('span.elementor-icon-list-text').all();

        for (const link of links){
            linkText = await container.openLink(link, container.resourcesMenu);
            expect.soft(await page.title()).toContain(linkText.split(' ')[0]);
        }
    });
});

test.describe('Verify all Element Container Links (JSON)', () => {

    test('Verify Platform menu Links', async ({page}) => {
        
        for(const [name, item] of Object.entries(menuData.menuItems.Platform)){     
            await container.openLinkJSON(name, container.platformMenu)
            expect.soft(await page.title()).toBe(item.pageTitle);
        }
    });

    test('Verify Features menu Links', async ({page}) => {
        
        for(const [name, item] of Object.entries(menuData.menuItems.Features)){     
            await container.openLinkJSON(name, container.featuresMenu)
            expect.soft(await page.title()).toBe(item.pageTitle);
        }
    });

    test('Verify Use Cases menu Links', async ({page}) => {
        
        for(const [name, item] of Object.entries(menuData.menuItems['Use Cases'])){     
            await container.openLinkJSON(name, container.useCasesMenu)
            expect.soft(await page.title()).toBe(item.pageTitle);
        }
    });

    test('Verify Pricing menu Links', async ({page}) => {
        let linkText;

        await container.pricing.click();
        await page.waitForLoadState('load');
        expect.soft(await page.title()).toContain('Pricing');
    });

    test('Verify Resources menu Links', async ({page}) => {
        
        for(const [name, item] of Object.entries(menuData.menuItems.Resources)){     
            if (name == 'Developer Docs'){
                continue;
            }
            await container.openLinkJSON(name, container.resourcesMenu)
            expect.soft(await page.title()).toBe(item.pageTitle);

            await container.goHomePage();
            expect(await page.title()).toBe("Fundraising That Feels Better — And Works Better | Givecloud");
        }
    });
});