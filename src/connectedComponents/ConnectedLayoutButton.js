import { connect } from 'react-redux';
import { LayoutButton } from 'react-viewerbase';
import OHIF from 'ohif-core';

const { setLayout } = OHIF.redux.actions;

const mapStateToProps = state => {
  return {
    currentLayout: state.viewports.layout,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // TODO: Change if layout switched becomes more complex
    onChange: selectedCell => {
      let viewports = [];
      const rows = selectedCell.row + 1;
      const columns = selectedCell.col + 1;
      const numViewports = rows * columns;
      for (let i = 0; i < numViewports; i++) {
        viewports.push({
          height: `${100 / rows}%`,
          width: `${100 / columns}%`,
          plugin: 'cornerstone', // Temporary because right now switching back from VTK breaks things
        });
      }
      const layout = {
        viewports,
      };

      dispatch(setLayout(layout));
    },
  };
};

const ConnectedLayoutButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutButton);

export default ConnectedLayoutButton;
