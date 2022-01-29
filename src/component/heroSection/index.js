import React from 'react'
import {HomeContainer,
    Name, Subtitle,
    Dialogue, NameSVG } from './heroSection'
import './hs.css'

export const HeroSection = () => {
    return (
        <HomeContainer id = 'Home'>
            <Dialogue>
                "As long back as I can remember, I've always wanted to create this portfolio"
            </Dialogue>
            
            <svg id="logo" width="286" height="33"
             viewBox="0 0 286 33" fill="none">
            <mask id="path-1-outside-1_21_19" maskUnits="userSpaceOnUse" x="0" y="0" width="286" height="33" fill="black">
            <rect fill="white" width="286" height="33"/>
            <path d="M3 30.42L11.9709 2.58H18.9461L27.9171 30.42H23.0166L14.8756 5.44133H15.9427L7.90042 30.42H3ZM7.99922 24.388V20.038H22.9376V24.388H7.99922Z"/>
            <path d="M38.4225 30.42V19.0133L28.7402 2.58H34.2927L40.8332 13.6773L47.3539 2.58H52.9064L43.2439 19.0133V30.42H38.4225Z"/>
            <path d="M69.4978 31C67.232 31 65.2363 30.5489 63.5106 29.6467C61.7981 28.7444 60.4544 27.4749 59.4796 25.838C58.518 24.2011 58.0371 22.2807 58.0371 20.0767V2.61866L62.8585 2.58V19.9607C62.8585 21.0047 63.0364 21.9391 63.392 22.764C63.7609 23.5889 64.2549 24.2913 64.874 24.8713C65.4932 25.4384 66.2045 25.8702 67.0081 26.1667C67.8116 26.4631 68.6415 26.6113 69.4978 26.6113C70.3804 26.6113 71.2169 26.4631 72.0073 26.1667C72.8109 25.8573 73.5222 25.4191 74.1414 24.852C74.7605 24.272 75.2479 23.5696 75.6036 22.7447C75.9593 21.9198 76.1371 20.9918 76.1371 19.9607V2.58H80.9585V20.0767C80.9585 22.2807 80.4711 24.2011 79.4962 25.838C78.5346 27.4749 77.1909 28.7444 75.4653 29.6467C73.7527 30.5489 71.7636 31 69.4978 31Z"/>
            <path d="M98.1871 31C96.1058 31 94.2286 30.6456 92.5556 29.9367C90.8958 29.2278 89.5258 28.216 88.4456 26.9013C87.3785 25.5738 86.7001 24.0013 86.4103 22.184L91.3503 21.4493C91.7718 23.0991 92.6347 24.3751 93.9388 25.2773C95.2561 26.1796 96.771 26.6307 98.4835 26.6307C99.4979 26.6307 100.453 26.476 101.349 26.1667C102.244 25.8573 102.969 25.4062 103.522 24.8133C104.089 24.2204 104.372 23.4922 104.372 22.6287C104.372 22.242 104.306 21.8876 104.174 21.5653C104.043 21.2302 103.845 20.9338 103.582 20.676C103.331 20.4182 103.002 20.1862 102.594 19.98C102.198 19.7609 101.737 19.574 101.21 19.4193L93.8598 17.2927C93.2274 17.1122 92.5424 16.8738 91.8047 16.5773C91.0802 16.268 90.3886 15.8491 89.73 15.3207C89.0845 14.7793 88.551 14.0962 88.1294 13.2713C87.7211 12.4336 87.5169 11.4024 87.5169 10.178C87.5169 8.38644 87.9779 6.88489 88.9 5.67333C89.8353 4.44889 91.0868 3.53378 92.6544 2.928C94.2352 2.32222 95.9872 2.02578 97.9105 2.03867C99.8601 2.05155 101.599 2.38022 103.127 3.02467C104.655 3.65622 105.933 4.57778 106.96 5.78933C107.988 7.00089 108.713 8.46378 109.134 10.178L104.016 11.048C103.806 10.0684 103.397 9.23711 102.791 8.554C102.198 7.858 101.467 7.32956 100.598 6.96867C99.7416 6.60778 98.826 6.41444 97.8512 6.38867C96.9028 6.37578 96.0202 6.51755 95.2034 6.814C94.3999 7.09756 93.7478 7.51 93.2472 8.05133C92.7598 8.59267 92.5161 9.22422 92.5161 9.946C92.5161 10.6291 92.7269 11.1898 93.1484 11.628C93.5699 12.0533 94.0903 12.3949 94.7094 12.6527C95.3417 12.8976 95.9806 13.1038 96.6261 13.2713L101.724 14.6633C102.422 14.8438 103.206 15.0887 104.076 15.398C104.945 15.7073 105.781 16.1391 106.585 16.6933C107.389 17.2476 108.047 17.9758 108.561 18.878C109.088 19.7802 109.351 20.9273 109.351 22.3193C109.351 23.7629 109.042 25.0324 108.423 26.128C107.817 27.2107 106.993 28.1129 105.953 28.8347C104.912 29.5564 103.72 30.0978 102.376 30.4587C101.046 30.8196 99.6494 31 98.1871 31Z"/>
            <path d="M116 30.42V2.58H120.762V14.296H134.238V2.58H138.98V30.42H134.238V18.6653H120.762V30.42H116Z"/>
            <path d="M167.706 31C165.625 31 163.747 30.6456 162.075 29.9367C160.415 29.2278 159.045 28.216 157.964 26.9013C156.897 25.5738 156.219 24.0013 155.929 22.184L160.869 21.4493C161.291 23.0991 162.154 24.3751 163.458 25.2773C164.775 26.1796 166.29 26.6307 168.002 26.6307C169.017 26.6307 169.972 26.476 170.868 26.1667C171.763 25.8573 172.488 25.4062 173.041 24.8133C173.608 24.2204 173.891 23.4922 173.891 22.6287C173.891 22.242 173.825 21.8876 173.693 21.5653C173.562 21.2302 173.364 20.9338 173.1 20.676C172.85 20.4182 172.521 20.1862 172.112 19.98C171.717 19.7609 171.256 19.574 170.729 19.4193L163.379 17.2927C162.746 17.1122 162.061 16.8738 161.324 16.5773C160.599 16.268 159.908 15.8491 159.249 15.3207C158.603 14.7793 158.07 14.0962 157.648 13.2713C157.24 12.4336 157.036 11.4024 157.036 10.178C157.036 8.38644 157.497 6.88489 158.419 5.67333C159.354 4.44889 160.606 3.53378 162.173 2.928C163.754 2.32222 165.506 2.02578 167.429 2.03867C169.379 2.05155 171.118 2.38022 172.646 3.02467C174.174 3.65622 175.452 4.57778 176.479 5.78933C177.507 7.00089 178.231 8.46378 178.653 10.178L173.535 11.048C173.324 10.0684 172.916 9.23711 172.31 8.554C171.717 7.858 170.986 7.32956 170.117 6.96867C169.26 6.60778 168.345 6.41444 167.37 6.38867C166.422 6.37578 165.539 6.51755 164.722 6.814C163.919 7.09756 163.267 7.51 162.766 8.05133C162.279 8.59267 162.035 9.22422 162.035 9.946C162.035 10.6291 162.246 11.1898 162.667 11.628C163.089 12.0533 163.609 12.3949 164.228 12.6527C164.861 12.8976 165.5 13.1038 166.145 13.2713L171.243 14.6633C171.941 14.8438 172.725 15.0887 173.594 15.398C174.464 15.7073 175.3 16.1391 176.104 16.6933C176.907 17.2476 177.566 17.9758 178.08 18.878C178.607 19.7802 178.87 20.9273 178.87 22.3193C178.87 23.7629 178.561 25.0324 177.942 26.128C177.336 27.2107 176.512 28.1129 175.472 28.8347C174.431 29.5564 173.239 30.0978 171.895 30.4587C170.565 30.8196 169.168 31 167.706 31Z"/>
            <path d="M185.914 30.42V2.58H190.676V30.42H185.914Z"/>
            <path d="M198.966 30.42V2.58H203.787L216.987 22.2033V2.58H221.808V30.42H216.987L203.787 10.7967V30.42H198.966Z"/>
            <path d="M241.441 31C239.596 31 237.864 30.6842 236.244 30.0527C234.637 29.4082 233.22 28.4673 231.995 27.23C230.783 25.9927 229.835 24.4782 229.15 22.6867C228.465 20.8822 228.122 18.82 228.122 16.5C228.122 13.4582 228.702 10.8611 229.861 8.70867C231.021 6.54333 232.608 4.88711 234.623 3.74C236.639 2.58 238.911 2 241.441 2C244.945 2 247.718 2.79911 249.759 4.39733C251.814 5.98267 253.204 8.21244 253.929 11.0867L249.068 11.8407C248.528 10.1909 247.645 8.87622 246.42 7.89667C245.195 6.90422 243.634 6.408 241.737 6.408C239.827 6.38222 238.239 6.78822 236.975 7.626C235.71 8.46378 234.755 9.64311 234.11 11.164C233.477 12.6849 233.161 14.4636 233.161 16.5C233.161 18.5364 233.477 20.3087 234.11 21.8167C234.742 23.3118 235.69 24.4782 236.955 25.316C238.233 26.1538 239.827 26.5856 241.737 26.6113C243.173 26.6242 244.431 26.3729 245.511 25.8573C246.591 25.3289 247.474 24.5362 248.159 23.4793C248.844 22.4096 249.305 21.0756 249.542 19.4773H244.523V15.8233H254.601C254.627 16.0296 254.647 16.3324 254.66 16.732C254.673 17.1316 254.68 17.37 254.68 17.4473C254.68 20.0767 254.146 22.416 253.079 24.4653C252.025 26.5018 250.51 28.1 248.534 29.26C246.558 30.42 244.194 31 241.441 31Z"/>
            <path d="M261.019 30.42V2.58H265.781V14.296H279.258V2.58H284V30.42H279.258V18.6653H265.781V30.42H261.019Z"/>
            </mask>
            <path d="M3 30.42L11.9709 2.58H18.9461L27.9171 30.42H23.0166L14.8756 5.44133H15.9427L7.90042 30.42H3ZM7.99922 24.388V20.038H22.9376V24.388H7.99922Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1_21_19)"/>
            <path d="M38.4225 30.42V19.0133L28.7402 2.58H34.2927L40.8332 13.6773L47.3539 2.58H52.9064L43.2439 19.0133V30.42H38.4225Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1_21_19)"/>
            <path d="M69.4978 31C67.232 31 65.2363 30.5489 63.5106 29.6467C61.7981 28.7444 60.4544 27.4749 59.4796 25.838C58.518 24.2011 58.0371 22.2807 58.0371 20.0767V2.61866L62.8585 2.58V19.9607C62.8585 21.0047 63.0364 21.9391 63.392 22.764C63.7609 23.5889 64.2549 24.2913 64.874 24.8713C65.4932 25.4384 66.2045 25.8702 67.0081 26.1667C67.8116 26.4631 68.6415 26.6113 69.4978 26.6113C70.3804 26.6113 71.2169 26.4631 72.0073 26.1667C72.8109 25.8573 73.5222 25.4191 74.1414 24.852C74.7605 24.272 75.2479 23.5696 75.6036 22.7447C75.9593 21.9198 76.1371 20.9918 76.1371 19.9607V2.58H80.9585V20.0767C80.9585 22.2807 80.4711 24.2011 79.4962 25.838C78.5346 27.4749 77.1909 28.7444 75.4653 29.6467C73.7527 30.5489 71.7636 31 69.4978 31Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1_21_19)"/>
            <path d="M98.1871 31C96.1058 31 94.2286 30.6456 92.5556 29.9367C90.8958 29.2278 89.5258 28.216 88.4456 26.9013C87.3785 25.5738 86.7001 24.0013 86.4103 22.184L91.3503 21.4493C91.7718 23.0991 92.6347 24.3751 93.9388 25.2773C95.2561 26.1796 96.771 26.6307 98.4835 26.6307C99.4979 26.6307 100.453 26.476 101.349 26.1667C102.244 25.8573 102.969 25.4062 103.522 24.8133C104.089 24.2204 104.372 23.4922 104.372 22.6287C104.372 22.242 104.306 21.8876 104.174 21.5653C104.043 21.2302 103.845 20.9338 103.582 20.676C103.331 20.4182 103.002 20.1862 102.594 19.98C102.198 19.7609 101.737 19.574 101.21 19.4193L93.8598 17.2927C93.2274 17.1122 92.5424 16.8738 91.8047 16.5773C91.0802 16.268 90.3886 15.8491 89.73 15.3207C89.0845 14.7793 88.551 14.0962 88.1294 13.2713C87.7211 12.4336 87.5169 11.4024 87.5169 10.178C87.5169 8.38644 87.9779 6.88489 88.9 5.67333C89.8353 4.44889 91.0868 3.53378 92.6544 2.928C94.2352 2.32222 95.9872 2.02578 97.9105 2.03867C99.8601 2.05155 101.599 2.38022 103.127 3.02467C104.655 3.65622 105.933 4.57778 106.96 5.78933C107.988 7.00089 108.713 8.46378 109.134 10.178L104.016 11.048C103.806 10.0684 103.397 9.23711 102.791 8.554C102.198 7.858 101.467 7.32956 100.598 6.96867C99.7416 6.60778 98.826 6.41444 97.8512 6.38867C96.9028 6.37578 96.0202 6.51755 95.2034 6.814C94.3999 7.09756 93.7478 7.51 93.2472 8.05133C92.7598 8.59267 92.5161 9.22422 92.5161 9.946C92.5161 10.6291 92.7269 11.1898 93.1484 11.628C93.5699 12.0533 94.0903 12.3949 94.7094 12.6527C95.3417 12.8976 95.9806 13.1038 96.6261 13.2713L101.724 14.6633C102.422 14.8438 103.206 15.0887 104.076 15.398C104.945 15.7073 105.781 16.1391 106.585 16.6933C107.389 17.2476 108.047 17.9758 108.561 18.878C109.088 19.7802 109.351 20.9273 109.351 22.3193C109.351 23.7629 109.042 25.0324 108.423 26.128C107.817 27.2107 106.993 28.1129 105.953 28.8347C104.912 29.5564 103.72 30.0978 102.376 30.4587C101.046 30.8196 99.6494 31 98.1871 31Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1_21_19)"/>
            <path d="M116 30.42V2.58H120.762V14.296H134.238V2.58H138.98V30.42H134.238V18.6653H120.762V30.42H116Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1_21_19)"/>
            <path d="M167.706 31C165.625 31 163.747 30.6456 162.075 29.9367C160.415 29.2278 159.045 28.216 157.964 26.9013C156.897 25.5738 156.219 24.0013 155.929 22.184L160.869 21.4493C161.291 23.0991 162.154 24.3751 163.458 25.2773C164.775 26.1796 166.29 26.6307 168.002 26.6307C169.017 26.6307 169.972 26.476 170.868 26.1667C171.763 25.8573 172.488 25.4062 173.041 24.8133C173.608 24.2204 173.891 23.4922 173.891 22.6287C173.891 22.242 173.825 21.8876 173.693 21.5653C173.562 21.2302 173.364 20.9338 173.1 20.676C172.85 20.4182 172.521 20.1862 172.112 19.98C171.717 19.7609 171.256 19.574 170.729 19.4193L163.379 17.2927C162.746 17.1122 162.061 16.8738 161.324 16.5773C160.599 16.268 159.908 15.8491 159.249 15.3207C158.603 14.7793 158.07 14.0962 157.648 13.2713C157.24 12.4336 157.036 11.4024 157.036 10.178C157.036 8.38644 157.497 6.88489 158.419 5.67333C159.354 4.44889 160.606 3.53378 162.173 2.928C163.754 2.32222 165.506 2.02578 167.429 2.03867C169.379 2.05155 171.118 2.38022 172.646 3.02467C174.174 3.65622 175.452 4.57778 176.479 5.78933C177.507 7.00089 178.231 8.46378 178.653 10.178L173.535 11.048C173.324 10.0684 172.916 9.23711 172.31 8.554C171.717 7.858 170.986 7.32956 170.117 6.96867C169.26 6.60778 168.345 6.41444 167.37 6.38867C166.422 6.37578 165.539 6.51755 164.722 6.814C163.919 7.09756 163.267 7.51 162.766 8.05133C162.279 8.59267 162.035 9.22422 162.035 9.946C162.035 10.6291 162.246 11.1898 162.667 11.628C163.089 12.0533 163.609 12.3949 164.228 12.6527C164.861 12.8976 165.5 13.1038 166.145 13.2713L171.243 14.6633C171.941 14.8438 172.725 15.0887 173.594 15.398C174.464 15.7073 175.3 16.1391 176.104 16.6933C176.907 17.2476 177.566 17.9758 178.08 18.878C178.607 19.7802 178.87 20.9273 178.87 22.3193C178.87 23.7629 178.561 25.0324 177.942 26.128C177.336 27.2107 176.512 28.1129 175.472 28.8347C174.431 29.5564 173.239 30.0978 171.895 30.4587C170.565 30.8196 169.168 31 167.706 31Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1_21_19)"/>
            <path d="M185.914 30.42V2.58H190.676V30.42H185.914Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1_21_19)"/>
            <path d="M198.966 30.42V2.58H203.787L216.987 22.2033V2.58H221.808V30.42H216.987L203.787 10.7967V30.42H198.966Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1_21_19)"/>
            <path d="M241.441 31C239.596 31 237.864 30.6842 236.244 30.0527C234.637 29.4082 233.22 28.4673 231.995 27.23C230.783 25.9927 229.835 24.4782 229.15 22.6867C228.465 20.8822 228.122 18.82 228.122 16.5C228.122 13.4582 228.702 10.8611 229.861 8.70867C231.021 6.54333 232.608 4.88711 234.623 3.74C236.639 2.58 238.911 2 241.441 2C244.945 2 247.718 2.79911 249.759 4.39733C251.814 5.98267 253.204 8.21244 253.929 11.0867L249.068 11.8407C248.528 10.1909 247.645 8.87622 246.42 7.89667C245.195 6.90422 243.634 6.408 241.737 6.408C239.827 6.38222 238.239 6.78822 236.975 7.626C235.71 8.46378 234.755 9.64311 234.11 11.164C233.477 12.6849 233.161 14.4636 233.161 16.5C233.161 18.5364 233.477 20.3087 234.11 21.8167C234.742 23.3118 235.69 24.4782 236.955 25.316C238.233 26.1538 239.827 26.5856 241.737 26.6113C243.173 26.6242 244.431 26.3729 245.511 25.8573C246.591 25.3289 247.474 24.5362 248.159 23.4793C248.844 22.4096 249.305 21.0756 249.542 19.4773H244.523V15.8233H254.601C254.627 16.0296 254.647 16.3324 254.66 16.732C254.673 17.1316 254.68 17.37 254.68 17.4473C254.68 20.0767 254.146 22.416 253.079 24.4653C252.025 26.5018 250.51 28.1 248.534 29.26C246.558 30.42 244.194 31 241.441 31Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1_21_19)"/>
            <path d="M261.019 30.42V2.58H265.781V14.296H279.258V2.58H284V30.42H279.258V18.6653H265.781V30.42H261.019Z" stroke="black" stroke-width="4" mask="url(#path-1-outside-1_21_19)"/>
            </svg>






            <Subtitle>
                this is a subtitle
            </Subtitle>
        </HomeContainer>
    )
}
