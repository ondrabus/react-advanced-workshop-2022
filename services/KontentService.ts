import { camelCasePropertyNameResolver, DeliveryClient, IDeliveryClient } from '@kontent-ai/delivery-sdk'
import { IHeader } from '@kontent-ai/core-sdk'

export default class KontentService {
	private static _instance: KontentService
	private static _previewInstance: KontentService
	protected client: DeliveryClient

	public get deliveryClient(): IDeliveryClient {
		return this.client
	}

	public static Instance(usePreviewMode = false) {
		if (!this._instance) {
			this._instance = new this(false)
			this._previewInstance = new this(true)
		}

		return usePreviewMode ? this._previewInstance : this._instance
	}

	protected constructor(usePreviewMode: boolean) {
		const globalHeaders: IHeader[] = []
		if (usePreviewMode) {
			globalHeaders.push({
				header: 'X-KC-Wait-For-Loading-New-Content',
				value: 'true',
			})
		}

		this.client = new DeliveryClient({
			projectId: process.env.KONTENT_PROJECT_ID ?? '',
			previewApiKey: process.env.KONTENT_PREVIEW_API_KEY ?? '',
			defaultQueryConfig: {
				usePreviewMode,
			},
			globalHeaders: () => globalHeaders,
		})
	}
}
