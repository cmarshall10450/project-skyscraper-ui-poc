import React from 'react'
import { Sidebar } from 'beautiful-react-ui'
import InspectorForm from './InspectorForm'

const InspectorSidebar = ({ selectedNode }) => {
	const isNodeSelected = Object.keys(selectedNode).length !== 0

	const NodeSelectedForm = () => {
		const {
			data: { component },
			content,
		} = selectedNode
		return (
			<div>
				<h2>{component.label}</h2>
				<h3>{content}</h3>
				<InspectorForm node={selectedNode} />
			</div>
		)
	}

	return (
		<Sidebar isOpen={true} title="Inspector">
			{isNodeSelected ? <NodeSelectedForm /> : null}
		</Sidebar>
	)
}

export default InspectorSidebar
