import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { CheckCircleFilled } from '@ant-design/icons';
import { setColorPrimary } from '@/store/slices/theme';
import { globalConfig } from '@/globalConfig';
import './themeModal.styl';
import PropTypes from 'prop-types';

function ThemeModal({ onClose }) {
  const dispatch = useDispatch();
  // 主题配置
  const theme = useSelector((state) => state.theme);

  return (
    <Modal
      className="M-themeModal"
      open={true}
      title="主题色"
      onCancel={() => {
        onClose();
      }}
      maskClosable={false}
      footer={null}
    >
      <div className="colors-con">
        {globalConfig.customColorPrimarys &&
          globalConfig.customColorPrimarys.map((item, index) => {
            return (
              <div
                className="theme-color"
                style={{ backgroundColor: item }}
                key={index}
                onClick={() => {
                  dispatch(setColorPrimary(item));
                }}
              >
                {theme.colorPrimary === item && (
                  <CheckCircleFilled
                    style={{
                      fontSize: 28,
                      color: '#fff',
                    }}
                  />
                )}
              </div>
            );
          })}
      </div>
    </Modal>
  );
}

ThemeModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ThemeModal;