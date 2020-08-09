const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
} = wp.blockEditor;
const { RangeControl, PanelBody } = wp.components;
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
	onToggleShadow = () => {
		this.props.setAttributes({ shadow: !this.props.attributes.shadow });
		console.log("SHADOW NOW: ", this.props.attributes.shadow);
	};
	onChangeShadowOpacity = (shadowOpacity) => {
		this.props.setAttributes({ shadowOpacity });
	};

	render() {
		const { className, attributes } = this.props;

		const {
			content,
			alignment,
			backgroundColor,
			textColor,
			shadow,
			shadowOpacity,
		} = attributes;
		let myStyles = "";
		let myBoxShadow = "";
		this.props.attributes.shadow
			? (myStyles = "7px dashed red")
			: (myStyles = "");
		this.props.attributes.shadow
			? (myBoxShadow = "10px 30px 20px rgba(0,0,0," + shadowOpacity)
			: (myBoxShadow = "");
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__("OPACITY", "mytheme-blocks")}>
						{shadow && (
							<RangeControl
								label={__("Shadow Opacity", "mytheme-blocks")}
								value={shadowOpacity}
								onChange={this.onChangeShadowOpacity}
								min={0.2}
								max={0.8}
								step={0.05}
							/>
						)}
					</PanelBody>
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
				<BlockControls
					controls={[
						[
							{
								icon: "admin-settings",
								title: __("SHADOW", "mytheme-blocks"),
								onClick: this.onToggleShadow,
								isActive: shadow,
							},
						],
					]}
				>
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
						border: myStyles,
						boxShadow: myBoxShadow,
					}}
				/>
			</Fragment>
		);
	}
}

export default Edit;
