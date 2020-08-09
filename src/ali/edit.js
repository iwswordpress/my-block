const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
} = wp.blockEditor;

const { Fragment, Component } = wp.element;

class Edit extends Component {
	onChangeContent = (content) => {
		this.props.setAttributes({ content });
	};

	onChangeAlignment = (alignment) => {
		this.props.setAttributes({ alignment });
	};

	onChangeBackgroundColor = (backgroundColor) => {
		this.props.setAttributes({ backgroundColor });
	};

	onChangeTextColor = (textColor) => {
		this.props.setAttributes({ textColor });
	};
	render() {
		const { className, attributes } = this.props;
		const { content, alignment, backgroundColor, textColor } = attributes;
		return (
			<Fragment>
				<InspectorControls>
					<PanelColorSettings
						title={__("Panel", "mytheme-blocks")}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: this.onChangeBackgroundColor,
								label: __("Backgorund Colour", "mytheme-blocks"),
							},
							{
								value: textColor,
								onChange: this.onChangeTextColor,
								label: __("Text Colour", "mytheme-blocks"),
							},
						]}
					/>
				</InspectorControls>
				<BlockControls>
					<AlignmentToolbar
						value={alignment}
						onChange={this.onChangeAlignment}
					/>
				</BlockControls>
				<RichText
					tagName="p"
					className={className}
					onChange={this.onChangeContent}
					value={content}
					formattingControls={["bold"]}
					style={{
						textAlign: alignment,
						backgroundColor: backgroundColor,
						color: textColor,
					}}
				/>
			</Fragment>
		);
	}
}

export default Edit;
