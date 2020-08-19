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

class LatestPostsEdits extends Component {
	render() {
		return <p>Test Posts</p>;
	}
}

export default LatestPostsEdits;
