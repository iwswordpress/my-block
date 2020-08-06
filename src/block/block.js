/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, AlignmentToolbar, BlockControls } = wp.blockEditor;
const { Toolbar, DropdownMenu } = wp.components;

registerBlockType("cgb/block-my-block", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("CW my-block"), // Block title.
	icon: "shield", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__("CW my-block"), __("CGB Example"), __("create-guten-block")],
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
	},

	edit: ({ className, attributes, setAttributes }) => {
		// Creates a <p class='wp-block-cgb-block-my-block'></p>.
		//console.log(attributes);
		// const { content } = attributes;
		const onChangeContent = (content) => {
			setAttributes({ content });
		};
		const { content, alignment } = attributes;

		const onChangeAlignment = (newAlignment) => {
			setAttributes({
				alignment: newAlignment === undefined ? "none" : newAlignment,
			});
		};
		return (
			<div>
				<BlockControls
					controls={[
						[
							{
								icon: "wordpress",
								title: __("JS TEST", "mytheme-blocks"),
								onClick: () => alert(true),
								isActive: false,
							},
						],
						[
							{
								icon: "admin-generic",
								title: __("ADMIN", "mytheme-blocks"),
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
									title: __("POST", "mytheme-blocks"),
									onClick: () => alert(true),
									isActive: false,
								},
							],
							[
								{
									icon: "admin-tools",
									title: __("TOOLS", "mytheme-blocks"),
									onClick: () => alert("ADMIN"),
									isActive: false,
								},
							],
						]}
					/>
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
					<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
				</BlockControls>
				<RichText
					tagName="p"
					className={className}
					onChange={onChangeContent}
					value={content}
					placeholder="add your text here..."
					// formattingControls={["bold", "italic"]}
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ({ attributes }) => {
		const { content, alignment } = attributes;

		return (
			<RichText.Content
				tagName="p"
				value={content}
				className={`gutenberg-examples-align-${alignment}`}
			/>
		);
	},
});
