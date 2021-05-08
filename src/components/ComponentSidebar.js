import React from 'react'
import { Sidebar } from 'beautiful-react-ui'

import components from '../config/editor-components.config.json'

const ComponentSidebar = ({ addNodeFn }) => {
	const componentsList = Object.entries(components).map(
		([namespace, namespaceComponents]) => (
			<Sidebar.Collapsible text={namespace} key={namespace}>
				{namespaceComponents.map((component) => (
					<Sidebar.Item
						text={component.label}
						onClick={() => addNodeFn(component)}
						key={`${namespace}/${component.name}`}
					/>
				))}
			</Sidebar.Collapsible>
		)
	)

	return (
		<Sidebar isOpen={true} showToggle={false} title="Components">
			<Sidebar.Divider />
			{componentsList}
		</Sidebar>
	)
}

export default ComponentSidebar
