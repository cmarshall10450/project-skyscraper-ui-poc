import { useState } from 'react'
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams'
import { Grid } from 'beautiful-react-ui'
import ComponentSidebar from './ComponentSidebar'
import InspectorSidebar from './InspectorSidebar'
import CustomNode from './CustomNode'

import 'beautiful-react-diagrams/styles.css'

const initialSchema = createSchema({
	nodes: [],
})

const Editor = () => {
	const [schema, { onChange, addNode, removeNode }] = useSchema(initialSchema)
	const [selectedNode, selectNode] = useState({})

	const deleteNodeFromSchema = (id) => {
		const nodeToRemove = schema.nodes.find((node) => node.id === id)
		removeNode(nodeToRemove)
	}

	const addNewNode = (component) => {
		const nextNode = {
			id: `node-${schema.nodes.length + 1}`,
			content: `Node ${schema.nodes.length + 1}`,
			coordinates: [100, 100],
			render: CustomNode,
			data: {
				nodeSelectedFn: selectNode,
				onClick: deleteNodeFromSchema,
				component: component,
			},
			inputs: [{ id: `port-${Math.random()}` }],
			outputs: [{ id: `port-${Math.random()}` }],
		}

		addNode(nextNode)
	}

	return (
		<Grid className="editor-container">
			<Grid.Column size="2" className="editor-container">
				<ComponentSidebar addNodeFn={addNewNode} />
			</Grid.Column>
			<Grid.Column size="8" className="editor-container">
				<Diagram schema={schema} onChange={onChange} />
			</Grid.Column>
			<Grid.Column size="2" className="editor-container">
				<InspectorSidebar selectedNode={selectedNode} />
			</Grid.Column>
		</Grid>
	)
}

export default Editor
