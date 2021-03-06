/**
 * BLOCK: my-block
 * BASE BUILD
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
} = wp.blockEditor;

const { Fragment } = wp.element;
const { apiFetch } = wp.apiFetch;
const {
	Toolbar,
	DropdownMenu,
	PanelBody,
	ToggleControl,
	ColorPalette,
} = wp.components;
registerBlockType("cgb/block-my-block", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("CRAIG - FIRST"), // Block title.
	icon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
		</svg>
	), // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "mytheme-category", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__("CW my-block"), __("CGB Example"), __("create-guten-block")],
	styles: [
		{
			name: "rounded",
			label: __("Rounded", "mytheme-blocks"),
			usDefault: true,
		},
		{
			name: "outline",
			label: __("Outline", "mytheme-blocks"),
		},
		{
			name: "squared",
			label: __("Squared", "mytheme-blocks"),
		},
	],
	attributes: {
		content: {
			type: "string",
			source: "html",
			selector: "p",
		},
		alignment: {
			type: "string",
			default: "none",
		},
		categories: {
			type: "object",
		},
		backgroundColor: {
			type: "string",
		},
		textColor: {
			type: "string",
		},
	},

	edit: ({ className, attributes, setAttributes }) => {
		// Creates a <p class='wp-block-cgb-block-my-block'></p>.
		//console.log(attributes);
		// const { content } = attributes;
		let toggleState = false;
		const onChangeContent = (content) => {
			setAttributes({ content });
		};
		const {
			content,
			alignment,
			categories,
			backgroundColor,
			textColor,
		} = attributes;

		const onChangeAlignment = (newAlignment) => {
			setAttributes({
				alignment: newAlignment === undefined ? "none" : newAlignment,
			});
		};
		const onChangeBackgroundColor = (backgroundColor) => {
			setAttributes({ backgroundColor });
		};

		const onChangeTextColor = (textColor) => {
			setAttributes({ textColor });
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelColorSettings
						title={__("Panel Color Settings", "mytheme-blocks")}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: onChangeBackgroundColor,
								label: __("Background Colour", "mytheme-blocks"),
							},
							{
								value: textColor,
								onChange: onChangeTextColor,
								label: __("Text Colour", "mytheme-blocks"),
							},
						]}
					/>
					<PanelBody title={__("<h1>SECTION ONE</h1>", "mytheme-blocks")}>
						<ColorPalette
							colors={[{ color: "#f03" }, { color: "blue" }]}
							onChange={onChangeBackgroundColor}
						/>{" "}
						<ToggleControl
							label="TOGGLE CONTROL"
							onChange={(v) => {
								console.log("v: ", v);
								console.log("toggleState: ", toggleState);
								toggleState = true;
								console.log("toggleState: ", toggleState);
							}}
							help={toggleState ? "ON" : "OFF"}
							checked={toggleState}
						/>
						<h1 style={{ color: "#ffa500" }}>A new block</h1>
					</PanelBody>
				</InspectorControls>
				<BlockControls
					controls={[
						[
							{
								icon: "admin-settings",
								title: __("ALIGN RIGHT", "mytheme-blocks"),
								onClick: () => onChangeAlignment("right"),
								isActive: false,
							},
						],
						[
							{
								icon: "warning",
								title: __("ALERT", "mytheme-blocks"),
								onClick: () => alert("ADMIN"),
								isActive: false,
							},
						],
					]}
				>
					<Toolbar
						isCollapsed
						controls={[
							[
								{
									icon: "admin-post",
									title: __("ADMIN POST", "mytheme-blocks"),
									onClick: () => alert(true),
									isActive: false,
								},
							],
							[
								{
									icon: "admin-tools",
									title: __("ADMIN TOOLS", "mytheme-blocks"),
									onClick: () => alert("ADMIN"),
									isActive: false,
								},
							],
						]}
					/>
					{content && content.length > 0 && (
						<Toolbar>
							<DropdownMenu
								controls={[
									[
										{
											icon: "twitter",
											title: __("TWITTER", "mytheme-blocks"),
											onClick: () => alert(true),
											isActive: false,
										},
									],
									[
										{
											icon: "facebook",
											title: __("FACEBOOK", "mytheme-blocks"),
											onClick: () => alert("ADMIN"),
											isActive: false,
										},
									],
								]}
							/>
						</Toolbar>
					)}
					<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
				</BlockControls>
				<RichText
					tagName="p"
					className={className}
					onChange={onChangeContent}
					value={content}
					style={{
						textAlign: alignment,
						backgroundColor: backgroundColor,
						color: textColor,
					}}
					placeholder="add your NEW text here..."
					// formattingControls={["bold", "italic"]}
				/>
			</Fragment>
		);
	},

	save: ({ attributes }) => {
		const { content, alignment, backgroundColor, textColor } = attributes;

		return (
			<RichText.Content
				tagName="p"
				value={content}
				style={{
					textAlign: alignment,
					backgroundColor: backgroundColor,
					color: textColor,
				}}
			/>
		);
	},
});
