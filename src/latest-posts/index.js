import edit from "./edit";
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.blockEditor; // Import RichText()) from wp.blockEditor

registerBlockType("mytheme-blocks/latest-posts", {
	title: __("Latest Posts", "mytheme-blocks"),

	description: __(" Block showing latest posts. ", "mytheme-blocks"),

	icon: "admin-post",

	category: "mytheme-category",

	edit: edit,

	save() {
		return null;
	},
});
