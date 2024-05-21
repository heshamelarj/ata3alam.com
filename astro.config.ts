import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import { SITE } from "./src/config";
import mdx from '@astrojs/mdx';

// import jopSoftwarecookieconsent from "@jop-software/astro-cookieconsent";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx(), react(), sitemap(
    {
      serialize(item) {


          item.changefreq = 'monthly';
          item.priority = 0.5;

        return item;
      },
    }
  ), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }),
    // jopSoftwarecookieconsent(
    // {
    //
    //   categories: {
    //     necessary: {
    //       enabled: true,  // this category is enabled by default
    //       readOnly: true  // this category cannot be disabled
    //     },
    //     analytics: {
    //       enabled: false,  // this category is enabled by default
    //       readOnly: false  // this category cannot be disabled
    //     },
    //     ads:{
    //
    //     },
    //   },
    //
    //   language: {
    //     default: 'ar',
    //     rtl: "ar",
    //     translations: {
    //       ar: {
    //         consentModal: {
    //           title: 'نحن نستخدم ملفات تعريف الارتباط (Cookies) ',
    //           description: 'يقوم موقعنا الإلكتروني بجمع بعض بياناتك، لكننا لا نفعل ذلك إلا إذا حصلنا على موافقتك',
    //           acceptAllBtn: 'قبول الكل',
    //           acceptNecessaryBtn: 'رفض الكل',
    //           showPreferencesBtn: 'إدارة التفضيلات الفردية',
    //           footer: `
    //             <a href="#path-to-privacy-policy.html" target="_blank">سياسة الخصوصية</a>
    //         `
    //         },
    //         preferencesModal: {
    //           title: 'إدارة تفضيلات ملف تعريف الارتباط',
    //           acceptAllBtn: 'قبول الكل',
    //           acceptNecessaryBtn: 'رفض الكل',
    //           savePreferencesBtn: 'قبول التحديد الحالي',
    //           closeIconLabel: 'إغلاق النافذة',
    //           showPreferencesBtn: 'إدارة التفضيلات الفردية',
    //           sections: [
    //             {
    //               title: 'ملفات تعريف الارتباط (Cookies) ',
    //               description: 'مرحبًا بك في لافتة تفضيلات ملفات تعريف الارتباط'
    //             },
    //             {
    //               title: 'ملفات تعريف الارتباط الضرورية بشكل أساسي',
    //               description: 'هذه الملفات الضرورية للعمل السليم للموقع الإلكتروني ولا يمكن تعطيلها.',
    //               linkedCategory: 'necessary' //هذا الحقل سيولد مفتاح تبديل مرتبط بالفئة 'الضرورية'
    //             },
    //             {
    //               title: 'الأداء والتحليلات',
    //               description: 'تقوم هذه الملفات بجمع معلومات حول كيفية استخدامك لموقعنا الإلكتروني. جميع البيانات مجهولة المصدر ولا يمكن استخدامها لتحديد هويتك.',
    //               linkedCategory: 'analytics'
    //             },
    //
    //             {
    //               title: 'الاشهارات على موقعنا',
    //               description: 'تقوم هذه الملفات بجمع معلومات حول كيفية استخدامك لموقعنا الإلكتروني. جميع البيانات مجهولة المصدر ولا يمكن استخدامها لتحديد هويتك.',
    //               linkedCategory: 'ads'
    //             },
    //             {
    //               title: 'مزيد من المعلومات',
    //               description: 'لأية استفسارات تتعلق بسياسة ملفات تعريف الارتباط وخياراتك، يرجى <a href="#contact-page">الاتصال بنا</a>'
    //             },
    //           ]
    //         }
    //       }
    //     }
    //   }
    // }
  // )
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  scopedStyleStrategy: "where"
});