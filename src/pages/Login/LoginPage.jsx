import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { PrimaryButton } from '../../components/_common/buttons/PrimaryButton';

// 유효성 검증 규칙 정의
const validationRules = {
  email: {
    required: '이메일을 입력해주세요',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: '올바른 이메일 형식이 아닙니다',
    },
  },
  password: {
    required: '비밀번호를 입력해주세요',
    minLength: {
      value: 4,
      message: '비밀번호는 최소 4자 이상이어야 합니다',
    },
  },
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  // const setAccessToken = useAuthStore((state) => state.setAccessToken); // 추후 실제 인증 스토어 연동 시 사용

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = ({ email, password }) => {
    const isCorrect = email === 'admin@naver.com' && password === '1234';
    if (isCorrect) {
      // 로그인 성공 시 accessToken 저장 (나중에 API 연동 시 적용)
      // const fakeToken = "abc.def.ghi";
      // setAccessToken(fakeToken); // 상태 저장
      // localStorage.setItem("accessToken", fakeToken); // 또는 세션 유지

      navigate('/kiosk');
    } else {
      alert('아이디 또는 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex h-[100vh] w-full max-w-md flex-col justify-center rounded-2xl">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold text-gray-800">로그인</h1>
          <p className="mt-2 text-sm text-gray-500">
            서비스 이용을 위해 로그인해주세요
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* 이메일 */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              이메일
            </label>
            <input
              type="text"
              id="email"
              placeholder="아이디를 입력하세요"
              {...register('email', validationRules.email)}
              className={`w-full rounded-lg border px-4 py-3 text-sm placeholder-gray-400 focus:ring-2 focus:outline-none ${
                errors.email
                  ? 'border-red-400 focus:ring-red-300'
                  : 'border-gray-200 focus:ring-blue-500'
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* 비밀번호 */}
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              {...register('password', validationRules.password)}
              className={`w-full rounded-lg border px-4 py-3 text-sm placeholder-gray-400 focus:ring-2 focus:outline-none ${
                errors.password
                  ? 'border-red-400 focus:ring-red-300'
                  : 'border-gray-200 focus:ring-blue-500'
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* 상태 유지 & 찾기 */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex cursor-pointer items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="mr-2 accent-blue-600"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              로그인 상태 유지
            </label>
            <span className="cursor-pointer text-sm text-blue-600 hover:underline">
              비밀번호 찾기
            </span>
          </div>

          {/* 로그인 버튼 */}
          <div className="pt-2">
            <PrimaryButton type="submit">로그인</PrimaryButton>
          </div>

          {/* 회원가입 안내 */}
          <div className="mt-4 text-center text-sm text-gray-600">
            계정이 없으신가요?{' '}
            <span className="cursor-pointer text-blue-600 hover:underline">
              회원가입
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
