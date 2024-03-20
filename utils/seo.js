import {imagePrefix} from "@/utils/dataJson"
const SITENAME = "Remotual"

const AllPageSEO = {
    "landingPage": {
        title: "What makes Remotual Awesome?",
        description: "Let's dive into what makes Remotual so awesome",
        image: imagePrefix + "heroSeo.svg",
        url: "https://remotual.com",
        pagetype: "website",
        manifest: "",
        icons: {
            icon: imagePrefix+ "logo_small.png",
            apple: imagePrefix+ 'logo_small.png'
        }
    },
    "userProfile": {
        title: "Remotual Assitant Profile",
        description: "Let's dive into what makes Remotual so awesome",
        image: imagePrefix + "heroSeo.svg",
        url: "https://remotual.com",
        pagetype: "website",
        manifest: "",
        icons: {
            icon: imagePrefix+ "logo_small.png",
            apple: imagePrefix+ 'logo_small.png'
        }
    }
}

function generateOpenGraphTags(seoTags) {
    const openGraph =  {
        title: seoTags.title,
        description: seoTags.description,
        url: seoTags.url,
        siteName: SITENAME,
        images: [
            {
                url: 'https://ik.imagekit.io/c8xfvkbcd/Group_161.png?updatedAt=1677229214259',
                width: 600,
                height: 600,
            },
            {
                url: seoTags.image,
                width: 1800,
                height: 1600,
                alt: 'Buildfast Hero Section',
            },
        ],
        locale: 'en_US',
        type: 'website',
    }
    return openGraph
}

function generateTwitterTags(seoTags) {
    const twitter  = {
        card: 'summary_large_image',
        title: seoTags.title,
        description: seoTags.description,
        images: [seoTags.image],
    }
    return twitter
}


async function getSEOTags(page, seoContent= null) {
    let seoTags = AllPageSEO[page];
    
    const openGraph = generateOpenGraphTags(seoTags);
    seoTags["openGraph"] = openGraph;

    const twitter = generateTwitterTags(seoTags)
    seoTags["twitter"] = twitter

    return seoTags;
}

export {
    getSEOTags
}