import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Conference } from './conference';

/**
 * Generated by '@kontent-ai/model-generator@5.8.0'
 *
 * (Component) Three conferences
 * Id: 7e2ae5c6-a398-4764-ba26-843526246692
 * Codename: _component__three_conferences
 */
export type ComponentThreeConferences = IContentItem<{
  /**
   * Conferences (modular_content)
   * Required: true
   * Id: 742dc89a-89fc-4223-825a-e8e3fbaa5b86
   * Codename: conferences
   */
  conferences: Elements.LinkedItemsElement<Conference>;

  /**
   * Description (text)
   * Required: true
   * Id: 03e82b62-d164-457c-85d1-a53b7fc08bcf
   * Codename: description
   */
  description: Elements.TextElement;

  /**
   * Headline (text)
   * Required: true
   * Id: cc0fe303-c67a-4617-a9c4-c0fa530bbfb2
   * Codename: headline
   */
  headline: Elements.TextElement;
}>;
