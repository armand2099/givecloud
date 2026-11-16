import {test, expect, type Page} from '@playwright/test'
import { ElementContainer } from '../pages/elementContainer';
import { text } from 'stream/iter';

let container: ElementContainer;
let linkText;


test.beforeEach(async ({page}) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    container = new ElementContainer(page);
});

test.describe('Verify all Element Container Links', () => {

    test('Verify Platform menu Links', async ({page}) => {
        const links = await container.platformMenu.locator('xpath=..').locator('span.elementor-icon-list-text').all();

        for (const link of links){
            linkText = await container.openLink(link, container.platformMenu);
            expect.soft(await page.title()).toContain(linkText.split(' ')[0]);

            await container.goHomePage();
            expect(await page.title()).toBe('Fundraising That Feels Better — And Works Better | Givecloud');
        }
    });

    test('Verify Features menu Links', async ({page}) => {        
        const links = await container.featuresMenu.locator('xpath=..').locator('span.elementor-icon-list-text').all();

        for (const link of links){
            linkText = await container.openLink(link, container.featuresMenu);
            expect.soft(await page.title()).toContain(linkText.split(' ')[0]);

            await container.goHomePage();
            expect(await page.title()).toBe('Fundraising That Feels Better — And Works Better | Givecloud');
        }
    });

    test('Verify Use Cases menu Links', async ({page}) => {
        const links = await container.useCasesMenu.locator('xpath=..').locator('span.elementor-icon-list-text').all();

        for (const link of links){
            linkText = await container.openLink(link, container.useCasesMenu);
            expect.soft(await page.title()).toContain(linkText.split(' ')[0]);

            await container.goHomePage();
            expect(await page.title()).toBe('Fundraising That Feels Better — And Works Better | Givecloud');
        }
    });

    test('Verify Pricing menu Links', async ({page}) => {
        let linkText;

        await container.pricing.click();
        await page.waitForLoadState('load');
        expect.soft(await page.title()).toContain('Pricing');

        await container.goHomePage();
        expect(await page.title()).toBe('Fundraising That Feels Better — And Works Better | Givecloud');
    });

    test('Verify Resources menu Links', async ({page}) => {
        const links = await container.resourcesMenu.locator('xpath=..').locator('span.elementor-icon-list-text').all();

        for (const link of links){
            linkText = await container.openLink(link, container.resourcesMenu);
            expect.soft(await page.title()).toContain(linkText.split(' ')[0]);

            await container.goHomePage();
            expect(await page.title()).toBe('Fundraising That Feels Better — And Works Better | Givecloud');
        }
    });
});