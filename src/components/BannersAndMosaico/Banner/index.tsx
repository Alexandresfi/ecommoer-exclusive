import Image from 'next/image';
import Link from 'next/link';

export function Banner() {
  return (
    <Link
      href="/search/caixas de som sem fio"
      prefetch={false}
      className="mt-[35px] mb-[35px] max-w-full flex justify-center items-center px-5 lg:px-0"
    >
      <Image
        src="https://lh3.googleusercontent.com/pw/AIL4fc-Ob36uyHqnxjnf0n_wyPHRRp6esF715vCyuBx8Rtz3ig2KJJ4MWyYdLfwmBsp7a3ZFJ7At0lc-VcbjaFCmaSiZ4aQFdHDhqEO8FWMQ3PEtV2HzTuVYYUu3EpxweZ8_m9L3HhfRp6fQjtyu7SQdcnYQbxLqVH3Kcz-tNSDd3GqLq3-yVAR-vv1ApvmyN27VhWy3JEEwkrVF0XEGE6O0IqB_wyrIkzA4H5M1-RldIMJvHgunS02AUSNAxSiwg8tUNY17jKdNlA7YirU_0hPJm2MjJAknmzwIHRblHO0rB1lbdkmN8BrsvD7eDfj-g8mlqkrUTc29b48InST-oCJIkwp7uUSyZ1YHivr0ngY3dPzbhoD4Yo1OQuYc4B3Z8inTcjeUCoJXG7nw9WRPyDsYa8f8naVjV0K8eElMTYoe1Haus-ORIqCccZZpIcRFE4V1fF-a00AdzjdhaDvvd82_ij16MDSWBp8mdPn7uhjwVCwLDS36kWvDuFZ7uZfDrW9SZzqm3vNExSF4uYFJPX3UwdbJqhOoKjTHeOjsGDgKs1nK1zvGnsqOvQOMMhnI8PH-ayPcm8y13m8Z24Ig6mJlrS3PRwNxDRm5rP_PnMkGyUkKZX15mgODjph0Und54WKq47Bare3-PNWdKyYSPd2aX1EwnJIqFHlAksS7Hs7V5riz-L0isxcbTTJMrcjC5N2X0MA-Od8bM3LOWP9ECuSSGplmgspEduhqP2Ls6pcpzFf7qhikjFlS6AHhZcyAR1U1d3ox0Vv2bnFz1_-1Ig2f3oKXSvNVRpu9Q5jbJ4t5dPyx7GgX5C5fEqnrjUsebZRxHfy9HtKAYeASI9QFbFkPsLFFERwz0WLnjyF_yp9HiGwUIBJjz3H3rp0VcUtuQoKE8fTwWv8xlbI1AuDZRJPtEQ2RwigetV0NJOCoQ3_V8zyjqtRb0DSBDUC6i4s=w1170-h500-s-no?authuser=0"
        width={1170}
        height={500}
        alt="banner-desktop"
      />
    </Link>
  );
}
