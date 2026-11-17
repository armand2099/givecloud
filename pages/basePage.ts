import { type Page, type ElementHandle, type Locator, type BrowserContext } from '@playwright/test';


export class BasePage {
    /*Class containing functions common to the whole project*/
    
    //Variable declaration
    readonly page:Page;


    constructor (page: Page){

        this.page = page;

    }

    async getPageTitle(): Promise<string> {
        /* Returns the current page tittle*/

        await this.page.waitForLoadState('load');
        let page_title = await this.page.title();
        console.log("Page title: ", page_title);
        return page_title;
    }

    async goHomePage(): Promise<void>{
        /* Navigates to the home page*/

        await this.page.bringToFront();
        await this.page.goto('/');
        await this.page.waitForLoadState('load');
    }

    async catchNewTab(context: BrowserContext, element: Locator): Promise<Page>{
        /*Catches new Tab opened*/
        let newTab: Page;
        let reTry = 0;
        let tabTitle;

        do {
                const pagePromise = context.waitForEvent('page');
                await element.click();
                newTab = await pagePromise;            
                await newTab.waitForLoadState("domcontentloaded");
                await newTab.waitForSelector('body');
                tabTitle = await newTab.title();
                reTry++;
            } while (newTab.isClosed() && reTry < 5);
        
        return newTab;
    }
}