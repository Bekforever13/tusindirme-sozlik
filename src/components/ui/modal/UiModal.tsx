import { ConfigProvider, Modal, ModalProps } from 'antd'
import React from 'react'

const UiModal: React.FC<ModalProps> = _props => {
	return (
		<ConfigProvider>
			<Modal {..._props} />
		</ConfigProvider>
	)
}

export { UiModal }
