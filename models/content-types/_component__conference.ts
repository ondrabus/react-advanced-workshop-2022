import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Conference } from './conference';

/**
 * Generated by '@kontent-ai/model-generator@5.8.0'
 *
 * (Component) Conference
 * Id: 82ab0091-ee71-4a4a-ae7b-88f2f67fa14c
 * Codename: _component__conference
 */
export type ComponentConference = IContentItem<{
  /**
   * Conference (modular_content)
   * Required: true
   * Id: 73bbf482-1517-43f0-ad2b-29348f1885da
   * Codename: conference
   */
  conference: Elements.LinkedItemsElement<Conference>;

  /**
   * Position (multiple_choice)
   * Required: true
   * Id: fcf43d01-d527-4cb7-ac63-7edaa70da70d
   * Codename: position
   */
  position: Elements.MultipleChoiceElement;
}>;
