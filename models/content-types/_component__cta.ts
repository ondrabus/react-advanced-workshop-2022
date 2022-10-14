import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.8.0'
 *
 * (Component) CTA
 * Id: 46c49068-c4ef-4ee2-9e85-4589eb5f4c7e
 * Codename: _component__cta
 */
export type ComponentCTA = IContentItem<{
  /**
   * Description (text)
   * Required: false
   * Id: 38a55c4e-088e-4a1d-a641-fd6aadf99301
   * Codename: description
   */
  description: Elements.TextElement;

  /**
   * Headline (text)
   * Required: true
   * Id: 86972137-b6cc-4a23-8bd2-d3c9e8b8c74e
   * Codename: headline
   */
  headline: Elements.TextElement;

  /**
   * Image (asset)
   * Required: true
   * Id: 0107c942-8f0f-44bc-89ce-eb4b872e5533
   * Codename: image
   */
  image: Elements.AssetsElement;

  /**
   * Link (text)
   * Required: true
   * Id: 69265a03-0dc3-4536-a230-674315cde394
   * Codename: link
   */
  link: Elements.TextElement;

  /**
   * Link text (text)
   * Required: true
   * Id: f588d497-285e-4962-819b-4105eb9117c2
   * Codename: link_text
   */
  link_text: Elements.TextElement;
}>;
