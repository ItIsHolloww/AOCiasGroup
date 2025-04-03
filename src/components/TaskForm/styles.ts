import styled from 'styled-components'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 12px;
	max-width: 500px;
	margin: 0 auto 24px;
`

export const Input = styled.input`
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
`

export const TextArea = styled.textarea`
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	min-height: 80px;
`

export const Select = styled.select`
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
`

export const Button = styled.button`
	padding: 10px;
	background: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	&:hover {
		background: #0056b3;
	}
`
