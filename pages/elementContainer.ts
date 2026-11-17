import { BasePage } from "./basePage";
import {type Locator, type Page, expect} from "@playwright/test";


export class ElementContainer extends BasePage{ //Class inherits from BasePage
    /*Login Page methods and attributes*/

    //Variables
    readonly page: Page;
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

    constructor (page: Page){
        
        super(page);

        this.page = page;

        //Declare page elements locators
        this.gcHome =  this.page.locator('img[src="https://givecloud.com/wp-content/uploads/2023/03/Group-15-1.svg"]').nth(0);

        //Platform menu locators
        this.platformMenu = this.page.locator('div#e-n-menu-title-2281').nth(0);
        this.platformAboutUs = this.platformMenu.getByRole('link', { name: 'About Us' });
        this.platformSecurityCompliance = this.platformMenu.getByRole('link', { name: 'Security & Compliance' });
        this.platformSupportOnboarding = this.platformMenu.getByRole('link', { name: 'Support & Onboarding' });
        this.platformDonorPerfect = this.platformMenu.getByRole('link', { name: 'DonorPerfect' });
        this.platformSalesForce = this.platformMenu.getByRole('link', { name: 'Salesforce' });
        this.platformExploreIntegrations = this.platformMenu.getByRole('link', { name: 'Explore Integrations' });

        //Features menu locators
        this.featuresMenu = this.page.locator('div#e-n-menu-title-2282').nth(0);
        this.featureDonationForms = this.featuresMenu.getByRole('link', { name: 'Donation Forms', exact: true });
        this.featureMemberships = this.featuresMenu.getByRole('link', { name: 'Memberships', exact: true });
        this.featureSponsorships = this.featuresMenu.getByRole('link', { name: 'Sponsorships', exact: true });
        this.featureOnlineStore = this.featuresMenu.getByRole('link', { name: 'Online Store', exact: true });
        this.featureImpactGiving = this.featuresMenu.getByRole('link', { name: 'Impact Giving', exact: true });
        this.featureDonorPortal = this.featuresMenu.getByRole('link', { name: 'Donor Portal', exact: true });
        this.featurePeerToPeerFundraising = this.featuresMenu.getByRole('link', { name: 'Peer-to-Peer Fundraising', exact: true });
        this.featureEmailAutomation = this.featuresMenu.getByRole('link', { name: 'Email Automation', exact: true });
        this.featureEventTicketingRegistration = this.featuresMenu.getByRole('link', { name: 'Event Ticketing & Registration', exact: true });
        this.featureWebsiteBuilder = this.featuresMenu.getByRole('link', { name: 'Website Builder', exact: true });
        this.featureVirtualPointOfSale = this.featuresMenu.getByRole('link', { name: 'Virtual Point of Sale', exact: true });
        this.featureTextToGive = this.featuresMenu.getByRole('link', { name: 'Text to Give', exact: true });
        this.exploreAllFeatures = this.featuresMenu.getByRole('link', { name: 'Explore All Features', exact: true });
        
        //Use Cases menu locators
        this.useCasesMenu = this.page.locator('div#e-n-menu-title-2283').nth(0);
        this.useCaseIncreaseRecurringGiving = this.useCasesMenu.getByRole('link', { name: 'Increase Recurring Giving', exact: true });
        this.useCaseBoostConversionRates = this.useCasesMenu.getByRole('link', { name: 'Boost Conversion Rates', exact: true });
        this.useCaseReduceAdminBurden = this.useCasesMenu.getByRole('link', { name: 'Reduce Admin Burden', exact: true });
        this.useCaseAiOptimizedFundraising = this.useCasesMenu.getByRole('link', { name: 'AI-Optimized Fundraising', exact: true });
        this.useCaseUnifiedCheckout = this.useCasesMenu.getByRole('link', { name: 'Unified Checkout', exact: true });
        this.useCaseDiversifyFundraising = this.useCasesMenu.getByRole('link', { name: 'Diversify Fundraising', exact: true });
        this.useCaseCanadianNonprofits = this.useCasesMenu.getByRole('link', { name: 'Canadian Nonprofits', exact: true });
        this.useCaseMissionsAndMissionTrips = this.useCasesMenu.getByRole('link', { name: 'Missions & Mission Trips', exact: true });
        this.useCaseInternationalDevelopment = this.useCasesMenu.getByRole('link', { name: 'International Development', exact: true });
        this.useCaseFaithBasedOrganizations = this.useCasesMenu.getByRole('link', { name: 'Faith-Based Organizations', exact: true });
        this.useCaseArtsAndCulture = this.useCasesMenu.getByRole('link', { name: 'Arts & Culture', exact: true });
        this.useCaseAnimalWelfare = this.useCasesMenu.getByRole('link', { name: 'Animal Welfare', exact: true });
        this.useCaseFoodBanks = this.useCasesMenu.getByRole('link', { name: 'Food Banks', exact: true });

        //Pricing menu locators
        this.pricing = this.page.locator('div#e-n-menu-title-2284').nth(0);

        //Resources menu locators
        this.resourcesMenu = this.page.locator('div#e-n-menu-title-2285').nth(0);
        this.resourceKnowledgeBaseHelpCenter = this.resourcesMenu.getByRole('link', { name: 'Knowledge Base & Help Center', exact: true });
        this.resourceGuidesToolkits = this.resourcesMenu.getByRole('link', { name: 'Guides & Toolkits', exact: true });
        this.resourceCaseStudies = this.resourcesMenu.getByRole('link', { name: 'Case Studies', exact: true });
        this.resourceBecomePartner = this.resourcesMenu.getByRole('link', { name: 'Become a Partner', exact: true });
        this.resourcePartnerDirectory = this.resourcesMenu.getByRole('link', { name: 'Partner Directory', exact: true });
        this.resourceDeveloperDocs = this.resourcesMenu.getByRole('link', { name: 'Developer Docs', exact: true });
        this.resourceBlog = this.resourcesMenu.getByRole('link', { name: 'Blog', exact: true });

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

    async openLinkJSON(name: string, menuItem: Locator): Promise<void>{
        /*Open Link from Menu from JSON data*/
        console.log((await menuItem.innerText()).split(' ')[0] + ": " + name);    
        await menuItem.click();
        await this.page.getByRole('link', { name: name, exact: true }).nth(0).click();
        await this.page.waitForLoadState('load');
    }

}