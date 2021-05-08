import { useState } from 'react'
import { FormGroup, Label, Input } from 'beautiful-react-ui'

const InspectorForm = ({ node }) => {
	const [formState, setFormState] = useState({})

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	return (
		<>
			<FormGroup orientation="horizontal">
				<Label htmlFor="component-name">Name</Label>
				<Input
					id="component-name"
					name="component-name"
					value={formState['component-name']}
					onChange={handleChange}
				/>
			</FormGroup>
		</>
	)
}

export default InspectorForm
