import { FacebookOutlined, GithubFilled, GoogleOutlined, CloudOutlined } from '@ant-design/icons';
import PropType from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signInWithFacebook, signInWithGithub, signInWithGoogle, signInWithMicrosoft } from '@/redux/actions/authActions';
import MicrosoftIcon from "@/components/common/MicrosoftIcon.svg";

const SocialLogin = ({ isLoading }) => {
  const dispatch = useDispatch();

  const onSignInWithGoogle = () => {
    dispatch(signInWithGoogle());
  };

  const onSignInWithFacebook = () => {
    dispatch(signInWithFacebook());
  };

  const onSignInWithGithub = () => {
    dispatch(signInWithGithub());
  };

  const onSignInWithMicrosoft = () => {
    dispatch(signInWithMicrosoft());
  };

  return (
    <div className="auth-provider">
      <button
        className="button auth-provider-button provider-facebook"
        disabled={isLoading}
        onClick={onSignInWithFacebook}
        type="button"
      >
        {/* <i className="fab fa-facebook" /> */}
        <FacebookOutlined />
        Continue with Facebook
      </button>
      <button
        className="button auth-provider-button provider-google"
        disabled={isLoading}
        onClick={onSignInWithGoogle}
        type="button"
      >
        <GoogleOutlined />
        Continue with Google
      </button>
      <button
        className="button auth-provider-button provider-github"
        disabled={isLoading}
        onClick={onSignInWithGithub}
        type="button"
      >
        <GithubFilled />
        Continue with GitHub
      </button>
      <button
        className="button auth-provider-button provider-microsoft"
        disabled={isLoading}
        onClick={onSignInWithMicrosoft}
        type="button"
      >
        <img
          src={MicrosoftIcon}
          style={{ width: '15px', height: '15px', marginLeft: '-30px' }}
          alt="Micrsoft icon"
        />
        <div style={{ paddingLeft: '30px' }} >Continue with Microsoft</div>
      </button>
    </div>
  );
};

SocialLogin.propTypes = {
  isLoading: PropType.bool.isRequired
};

export default SocialLogin;
