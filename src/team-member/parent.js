const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.blockEditor; // Import RichText()) from wp.blockEditor

const { InnerBlocks, InspectorControls } = wp.editor;
const { PanelBody, RangeControl } = wp.components;
const attributes = {
	columns: {
		type: "number",
		default: 2,
	},
};
registerBlockType("mytheme-blocks/team-members", {
	title: __("Team Members", "mytheme-blocks"),

	description: __("Block showing a Team Members.", "mytheme-blocks"),

	icon: "grid-view",
	supports: {
		html: false,
	},

	category: "mytheme-category",

	keywords: [
		__("team", "mytheme-blocks"),
		__("member", "mytheme-blocks"),
		__("person", "mytheme-blocks"),
	],
	attributes: {
		columns: {
			type: "number",
			default: 2,
		},
	},

	edit({ className, attributes, setAttributes }) {
		const { columns } = attributes;
		return (
			<div style={{ border: "3px dashed red", padding: "20px" }}>
				<InspectorControls>
					<PanelBody>
						<RangeControl
							label={__("column", "mytheme-blocks")}
							value={columns}
							onChange={(columns) => setAttributes({ columns })}
							min={1}
							max={6}
						/>
					</PanelBody>
				</InspectorControls>
				<InnerBlocks
					allowedBlocks={["mytheme-blocks/team-member"]}
					template={[
						["mytheme-blocks/team-member"],
						["mytheme-blocks/team-member"],
					]}
				/>
			</div>
		);
	},

	save({ attributes }) {
		const { columns } = attributes;
		return (
			<div style={{ border: "3px dashed red", padding: "20px" }}>
				<InnerBlocks.Content />
			</div>
		);
	},
});
