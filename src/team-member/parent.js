const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.blockEditor; // Import RichText()) from wp.blockEditor

const { InnerBlocks } = wp.editor;

registerBlockType("mytheme-blocks/team-members", {
	title: __("Team Members", "mytheme-blocks"),

	description: __("Block showing a Team Members.", "mytheme-blocks"),

	icon: "grid-view",

	category: "mytheme-category",

	keywords: [
		__("team", "mytheme-blocks"),
		__("member", "mytheme-blocks"),
		__("person", "mytheme-blocks"),
	],

	edit({ className }) {
		return (
			<div
				className={className}
				style={{ border: "3px dashed red", padding: "20px" }}
			>
				<InnerBlocks
					allowedBlocks={["mytheme-blocks/team-member"]}
					template={[
						["mytheme-blocks/team-member"],
						["mytheme-blocks/team-member"],
					]}
					// templateLock="all"
				/>
			</div>
		);
	},

	save() {
		return (
			<div style={{ border: "3px dashed red", padding: "20px" }}>
				<InnerBlocks.Content />
			</div>
		);
	},
});
