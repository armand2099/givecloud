import { BasePage } from "./basePage";
import {type Locator, type Page, type BrowserContext} from "@playwright/test";


export class ElementContainer extends BasePage{ //Class inherits from BasePage
    /*Login Page methods and attributes*/

    //Variables
    readonly page: Page;
    readonly context: BrowserContext;
    readonly gcHome: Locator;

    //Platform menu locators
    readonly platformMenu: Locator;
    readonly platformAboutUs: Locator;
    readonly platformSecurityCompliance: Locator;
    readonly platformSupportOnboarding: Locator;
    readonly platformDonorPerfect: Locator;
    readonly platformSalesForce: Locator;
    readonly platformExploreIntegrations: Locator;

    //Features menu locators
    readonly featuresMenu: Locator;
    readonly featureDonationForms: Locator;
    readonly featureMemberships: Locator;
    readonly featureSponsorships: Locator;
    readonly featureOnlineStore: Locator;
    readonly featureImpactGiving: Locator;
    readonly featureDonorPortal: Locator;
    readonly featurePeerToPeerFundraising: Locator;
    readonly featureEmailAutomation: Locator;
    readonly featureEventTicketingRegistration: Locator;
    readonly featureWebsiteBuilder: Locator;
    readonly featureVirtualPointOfSale: Locator;
    readonly featureTextToGive: Locator;
    readonly exploreAllFeatures: Locator;

    //Use Cases menu locators
    readonly useCasesMenu: Locator;
    readonly useCaseIncreaseRecurringGiving: Locator;
    readonly useCaseBoostConversionRates: Locator;
    readonly useCaseReduceAdminBurden: Locator;
    readonly useCaseAiOptimizedFundraising: Locator;
    readonly useCaseUnifiedCheckout: Locator;
    readonly useCaseDiversifyFundraising: Locator;
    readonly useCaseCanadianNonprofits: Locator;
    readonly useCaseMissionsAndMissionTrips: Locator;
    readonly useCaseInternationalDevelopment: Locator;
    readonly useCaseFaithBasedOrganizations: Locator;
    readonly useCaseArtsAndCulture: Locator;
    readonly useCaseAnimalWelfare: Locator;
    readonly useCaseFoodBanks: Locator;

    //Pricing menu locators
    readonly pricing: Locator;

    //Resources menu locators
    readonly resourcesMenu: Locator;
    readonly resourceKnowledgeBaseHelpCenter: Locator;
    readonly resourceGuidesToolkits: Locator;
    readonly resourceCaseStudies: Locator;
    readonly resourceBecomePartner: Locator;
    readonly resourcePartnerDirectory: Locator;
    readonly resourceDeveloperDocs: Locator;
    readonly resourceBlog: Locator;

    constructor (page: Page, context: BrowserContext){
        
        super(page);

        this.page = page;
        this.context = context;

        //Declare page elements locators
        this.gcHome =  this.page.locator('img[src="https://givecloud.com/wp-content/uploads/2023/03/Group-15-1.svg"]').nth(0);

        //Platform menu locators
        this.platformMenu = this.page.locator('div#e-n-menu-title-2281').nth(0);
        this.platformAboutUs = this.page.getByRole('link', { name: 'About Us' });
        this.platformSecurityCompliance = this.page.getByRole('link', { name: 'Security & Compliance' });
        this.platformSupportOnboarding = this.page.getByRole('link', { name: 'Support & Onboarding' });
        this.platformDonorPerfect = this.page.getByRole('link', { name: 'DonorPerfect' });
        this.platformSalesForce = this.page.getByRole('link', { name: 'Salesforce' });
        this.platformExploreIntegrations = this.page.getByRole('link', { name: 'Explore Integrations' });

        //Features menu locators
        this.featuresMenu = this.page.locator('div#e-n-menu-title-2282').nth(0);
        this.featureDonationForms = this.page.getByRole('link', { name: 'Donation Forms', exact: true });
        this.featureMemberships = this.page.getByRole('link', { name: 'Memberships', exact: true });
        this.featureSponsorships = this.page.getByRole('link', { name: 'Sponsorships', exact: true });
        this.featureOnlineStore = this.page.getByRole('link', { name: 'Online Store', exact: true });
        this.featureImpactGiving = this.page.getByRole('link', { name: 'Impact Giving', exact: true });
        this.featureDonorPortal = this.page.getByRole('link', { name: 'Donor Portal', exact: true });
        this.featurePeerToPeerFundraising = this.page.getByRole('link', { name: 'Peer-to-Peer Fundraising', exact: true });
        this.featureEmailAutomation = this.page.getByRole('link', { name: 'Email Automation', exact: true });
        this.featureEventTicketingRegistration = this.page.getByRole('link', { name: 'Event Ticketing & Registration', exact: true });
        this.featureWebsiteBuilder = this.page.getByRole('link', { name: 'Website Builder', exact: true });
        this.featureVirtualPointOfSale = this.page.getByRole('link', { name: 'Virtual Point of Sale', exact: true });
        this.featureTextToGive = this.page.getByRole('link', { name: 'Text to Give', exact: true });
        this.exploreAllFeatures = this.page.getByRole('link', { name: 'Explore All Features', exact: true });
        
        //Use Cases menu locators
        this.useCasesMenu = this.page.locator('div#e-n-menu-title-2283').nth(0);
        this.useCaseIncreaseRecurringGiving = this.page.getByRole('link', { name: 'Increase Recurring Giving', exact: true });
        this.useCaseBoostConversionRates = this.page.getByRole('link', { name: 'Boost Conversion Rates', exact: true });
        this.useCaseReduceAdminBurden = this.page.getByRole('link', { name: 'Reduce Admin Burden', exact: true });
        this.useCaseAiOptimizedFundraising = this.page.getByRole('link', { name: 'AI-Optimized Fundraising', exact: true });
        this.useCaseUnifiedCheckout = this.page.getByRole('link', { name: 'Unified Checkout', exact: true });
        this.useCaseDiversifyFundraising = this.page.getByRole('link', { name: 'Diversify Fundraising', exact: true });
        this.useCaseCanadianNonprofits = this.page.getByRole('link', { name: 'Canadian Nonprofits', exact: true });
        this.useCaseMissionsAndMissionTrips = this.page.getByRole('link', { name: 'Missions & Mission Trips', exact: true });
        this.useCaseInternationalDevelopment = this.page.getByRole('link', { name: 'International Development', exact: true });
        this.useCaseFaithBasedOrganizations = this.page.getByRole('link', { name: 'Faith-Based Organizations', exact: true });
        this.useCaseArtsAndCulture = this.page.getByRole('link', { name: 'Arts & Culture', exact: true });
        this.useCaseAnimalWelfare = this.page.getByRole('link', { name: 'Animal Welfare', exact: true });
        this.useCaseFoodBanks = this.page.getByRole('link', { name: 'Food Banks', exact: true });

        //Pricing menu locators
        this.pricing = this.page.locator('div#e-n-menu-title-2284').nth(0);

        //Resources menu locators
        this.resourcesMenu = this.page.locator('div#e-n-menu-title-2285').nth(0);
        this.resourceKnowledgeBaseHelpCenter = this.page.getByRole('link', { name: 'Knowledge Base & Help Center', exact: true });
        this.resourceGuidesToolkits = this.page.getByRole('link', { name: 'Guides & Toolkits', exact: true });
        this.resourceCaseStudies = this.page.getByRole('link', { name: 'Case Studies', exact: true });
        this.resourceBecomePartner = this.page.getByRole('link', { name: 'Become a Partner', exact: true });
        this.resourcePartnerDirectory = this.page.getByRole('link', { name: 'Partner Directory', exact: true });
        this.resourceDeveloperDocs = this.page.getByRole('link', { name: 'Developer Docs', exact: true });
        this.resourceBlog = this.page.getByRole('link', { name: 'Blog', exact: true });

    }

    async openLink(link: Locator, menuItem: Locator): Promise<string>{
        /*Open Link from Menu*/

        let linkText = await link.textContent();
        console.log((await menuItem.innerText()).split(' ')[0] + ": " + linkText);

        if (linkText === null) {
            throw new Error('Link has no text content');
        }

        await menuItem.click();
        await link.click();
        await this.page.waitForLoadState('load');

        return linkText;

    }

    async openLinkJSON(name: string, menuItem: Locator): Promise<string>{
        /*Open Link from Menu from JSON data*/
        const element = this.page.getByRole('link', { name: name, exact: true }).nth(0)
        let tabTitle;
        //const pagePromise = this.context.waitForEvent('page');

        console.log((await menuItem.innerText()).split(' ')[0] + ": " + name);

        await menuItem.click();

        //Catches new Tab
        if (name == "Developer Docs"){
            /*do {
                const pagePromise = this.context.waitForEvent('page');
                await this.page.getByRole('link', { name: name, exact: true }).nth(0).click();
                newTab = await pagePromise;            
                await newTab.waitForLoadState("domcontentloaded");
                await newTab.waitForSelector('body');
                tabTitle = await newTab.title();
                reTry++;
            } while (newTab.isClosed() && reTry < 5);*/
            tabTitle = (await this.catchNewTab(this.context, element)).title();
        }else{            
            await this.page.getByRole('link', { name: name, exact: true }).nth(0).click();
            await this.page.waitForLoadState('load');
            tabTitle = await this.page.title();
        }

        return tabTitle;

    }

}