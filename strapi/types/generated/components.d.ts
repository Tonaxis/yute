import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentSection extends Schema.Component {
  collectionName: 'components_content_sections';
  info: {
    displayName: 'section';
    icon: 'cube';
  };
  attributes: {
    text: Attribute.RichText;
    images: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.section': ContentSection;
    }
  }
}
