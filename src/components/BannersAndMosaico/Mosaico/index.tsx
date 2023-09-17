import Image from 'next/image';
import Link from 'next/link';
import './styles.css';
import { Header } from '@/components/Shelfies/Components/Header';
import { HandleImg } from './handleImg';

export function Moisaico() {
  return (
    <div className="mt-[35px] mb-[35px]">
      <Header title="Novidades" subTitle="Veja o que tem de novo" />

      <div className="flex flex-col items-center lg:grid max-w-container gap-[30px] m-auto mosaico px-5 lg:px-0">
        <Link href="/search/ps5" prefetch={false} className=" ps5 md:h-[600px]">
          <Image
            src="https://lh3.googleusercontent.com/pw/AIL4fc8c7-mFQaDdVfRd4H5KJ9kHlBqJGfMtjvQItZYFj-RrNkuw1J0J2x6BpEsiGssrIqYDOccj3ZUopiYOxBxUP3152HMgJhGZzSYitR5L_eBU9OPD3egiNH15x9sNBYnkMR8win0sdmCdO4jdgWobciSbTtkkpj2yqWkjOoyoD0gcYdFSTf2L2m8pkNhLv1ixD_jaOLklEr1u_j2irXw-LzpJPmnhP0NAWb4Kgo4is90sP_iRHfmK2Kbi9SnzYK4ItNWuUC7DkumvF_Fj4eg6SpEjd_uSGvJY1vlFadjiHozJzEVkCq7TRciXZQkCFoQUBApAwUCdVjNaD77wJkndpjn4BX0jdQlN9zpV8nWOmsyH3Pv1NkiG9dkciKfSeXvwCLIqF1y9eGiAHQb9TWMbWENNNclCQn_lVK8o9LJGuegy9BtbgR2UGlLZ7ekBWm4nRMGBlZ9uYVmf411mHYq0vPc1-UNq82OboAljf3MQ9UnLoEVsdmKAwMjHQYMaYBczpk3SHbWZctKPzZhAPH0hewLWMx7JOxiBha2FHmae5gyFdS_k4Enk3OV62rlwn43b4rOgGx6WYS1YOe4buaL_LWZCDADbLP9QWQqeVD1fEvaVoHqovS7O5UhoTGv42WEat5vHUQonhTMzITf3kbuwVGCU340p9MXc8ZXaLHK-qF8OKvMfgSBOZ_8TCBAgdCz2u7IhotZiB48apppc_jvqRgaEZgCmx1pLNxllPOpjE4TrRvDc0U93LFM3V_Xi4fjebZKbGuS4nqzvtxPSbhJC18bBwU746CEgSJmeMu1c8WyYf2DMEYBzu73Q2yhFsdr8XDK7oIptMhSBlxXiGF_PBt16kxtZb1GkU-MGksH8eZpD3qhyrkNbopqNO07n5PxM6o7jNUqmGVqAQHH-hMadfyl9SzZAwRnY1HnSwrGC6CGXT3AolzGlnWdvFOM=w570-h600-s-no?authuser=0"
            width={570}
            height={600}
            alt="PS5"
            className="lg:object-fill lg:h-[600px]"
          />
        </Link>

        <Link href="/search/moda feminina" prefetch={false} className=" woman">
          <Image
            src="https://lh3.googleusercontent.com/pw/AIL4fc9AQPTiz_Etw0MKMUW_dyS2OMJ9rXlEE6kYGijawq9XlahvMT1s-I6QKtkZj4hN7S5IueyRqoEpZ5iFCyRMtYYWop6mPwG2wPEygyfwPwgajO1LLPS1hz8dTNMb2XKbhwb22_pAIZ8IrKFs9NhimOswqdIH5SIBq7RmRn9Tk8ATGPvJfK1enJ23L8t3a8mtFHlmssuUimGP6HHD3XDVmjvp8pxXlsbH9xY81X2Rlkjqf8ygPlTWzKOYF2_KveE3oObcUA9B5X-7W2XBgL0s8M6LYfEdlariv30_laoA3DvpCkjp3sz9g3ZZCQ8UpTrYk4eMP2g9BDmD_BHlTbxIwH9i_WukrCutMbt6D0nn5LMMNGcGhL_u_v1RYiWqyGlJrDvRr632XgVFOGcHLI1R8oMgP7gCBxbo0Q3WvEgsT7VoJk2HVhRApeR1M2mP52SXnuAvSfPqtotkoZ9Bz-fOa6yAgVHUgG7netIPAwHhRes8nqkTmTE6tBRGHvpXTfufXo64XuSGnzyY29wiwER8HaVKCTWMpClnL77XLJ1BVNPB7rnaoGKRtpwvdv3oxlyjlfnjiLfSKg6ibhK1TT5ujKmcNqc1hB_LcQD5Ei12iDWvhOveBEZrwlmBlQHUkt-rVmsahI_Mz0hjtFE51Ou69smF06f_QeniD0u-1F7q_C129ng-CKYawoB5Plbs1k8nW7_qkce86NCrnwPA8Ylzk5jylrXUbYnd0Zy0kDJ9JO4PqKzFoHZzPl5-xdmlQk2RPIeW7ByrNY-e5PmibkwzJiAXKHdU-TT93hqCPI7X8Q5v79HMxW7F7BMn-NV-4LuhDL9V4aL04d9EV9zs4_im6IOm6Ml60pd0D942qnI_aoS0BKyzlmSsA2M72GzWi7puzwv2priWpkaLUHFAGxIT9JYO06-2D3zTbj1LLmdBkRPn6-TCeLnkYu-Emuw=w570-h284-s-no?authuser=0"
            width={570}
            height={284}
            alt="moda feminina"
          />
        </Link>

        <HandleImg
          href="/search/alto-falante amazon"
          nameGrid="phone"
          desktopSrc="https://lh3.googleusercontent.com/pw/AIL4fc_lhfle8QFfsCuNhvHnApCPUeTnGivztQKE6SZtIKvDuvZYqJDK2fetuGkegWpevogWMXMoOt0d0PI60q5hA11RcWmm7pHjfwddJSd-h2Bl20uEP1DLDPk0JenpyFuBo39Qb9Pex2nbKvc7nNRxt2aJIpdVJxTru2NNKpRdPKxhtpVg4H-leSd41dw89xTKDQerx_a_mQa8HX7gVZMQdXvEMQpShe2VVGmrK11ZdB9I55go0Pfa8xHHQkaNaRUGS-q3fnOWqOJQt14NDkX2-bDl7jyetIX7kuGzWMXDbW8MH787OecPZWfj3DIDipcl2VrOv59TNYwjM6VRLEdZ0TxVQ9IROT9F2aw62Z9n3Ac665FJ_Oy2mWy3m5z132kpTqLrUdRdFb5HzM4Y_298QG5DCb_Q6NnK1_Ptsmd539SjB3LmKyVOYDM3BBEfadPlgJGUakx5zZFo11ttv2xaD4KMyCTK2OlqLZCgfgLejtTOeT__M57LPw66q9DQcoAXDMwQO_EV1jEbiScuFf-gzRwRZMUjOvg44YWfL5d_AbVyg2tCf8udxWjAraoIuJ5m7va5cYfv1EFZIsuqgK7birWytCtwMvW5n2kISDjmZfIjuVMVexQF2-Y0BF3O5LT1DwEMdQO25I5JccGmZoLMr7A2NE_xd43xbrbgBE2jkYl7sPOB8yTQdBspIwjNsEvhS0ZRpzwuG0DqkZzgU1NvIZaBRs0996DWuWZ-LFZWxtPKkCjcezNmiN1m4f4CTNmWJFK2do7QsZc8a8FCSYLpLfbXzB21hgDa-He6qt6EMhwZOleY7uiDxMTNxnRdQe76f-GFptQZ-o_mhq3pSdq71Lg5ilZCu5QDjzm0fthWkGxq8XY2Ac5PIUNGUqnwz7TC-e22t7ORoWk6HlubvVkl8Buv8D6eDr9L7mhvG61vNuMeBWe5kJVCBKOnPuM=w270-h284-s-no?authuser=0"
          mobileSrc="https://lh3.googleusercontent.com/pw/AIL4fc8AF-aXDw_4gLwVkPmzWAYgcoVlDv45Q-Qypxd7MCB5eWhW_qM-DQ_sr0cbHtloyXTfqf8PPJHn_ttm53ntZ9aL8doY9rZgRFaefJbKLK9RnhqUu5Y6y7-60k79oW8dH7zw4EuWPLxBXEMrjxHEvkHd-23VZs7dghTUFeMn5Dp2zyx-YgV2J1uWR_pwdIq58dvXsbYg3R2eBR_t1i_MXthgTTztIYTmKvZJnW0l4h3so-xVliDmu-W0PNgGCQrDNL6FkdwenUPE4n505LdHVAPWf8qQZcBr6eWOwfjOCTU5D4CxVk3d7ZG_eMx42Jz2CopeGd-Q2L3kAKXcjtcStBkjACZRKoMn4b9XX2Jxoj2LcF1Kbm0RvVm0iyUwOSH06-tcVCqh7tPURdI4a2A_M0XfWE0vLKwye0kCoOdYbES-dBPRczLEGcreMZw5VguUoGVqGq2wgHnvDLxkAI-MT8xLOOr7DGWSjf-pZrkh5I-zMO3MhJTb2y3Fij4vllIz09oHPZWqzV1LyOTNDD0Z0cBZUy2DW7Ij0GLdvXIqmGz0IgxUmAjQRlekSK46nVoI2QTzKpzkOJFO9hl4VVGzdrKKlqFeDC2-kVqxqj7FFjlDRFxkIvGNqT6a23ZQuqsWfsK13ByXloyLcFggMFeA9yvdoDEAOhTaTA8-fhlSuzm8SQN7jvTxAopRpMdFWhifuRqaZRMUmC3vDw4SMZm-gkDkDcLUvLOXlRAbuEBTaI6h_xLp6efW-t2sxsEaduG6yGncXbDrIejwuNVS8t1yKprf0c_iq8YXd8ZoNsum-UwKUdoZ_rttGabN8jC1_slVe0650lf6EuDuN6-1njpP_w6_iohQXoad5v4mmqnsDzI6EbP9gUyS_apCMDsoGFM1BZy78cLPRsWgvbXFrrcqr_mOeowF08S5YqLo1cLSsoeUUZl6fdpngpXXx3A=w572-h284-s-no?authuser=0"
        />

        <HandleImg
          href="/search/perfume gucci intense"
          nameGrid="perfume"
          desktopSrc="https://lh3.googleusercontent.com/pw/AIL4fc8yuFuKMHgU1IOyf7aKD1gvwcq4MOPTdySamyqu2IvR4EP93ufWKyzYS0nCOUKOsaxzf-LnUB3rNCruEbJzUTxDKocm7s5NmPNFvDiAicD6LFxLg-y-YByeF7U9uEkarB8_ocOg4uVhENpetaqlNygE1VBmXskWunycbrEgQ93ZeGSl04a0zV6S_4UB2is5eG0fCEGK9u12dJX01iUrZucfHlmVEBYkZLXsE-fgop2xfLefYAtKbQcxCik5sITxs441S_rA9VNo4w0VIqHKpO2lp6IB6j82scHqDUyrMrHgzI_4qS4nXtHVsS8poQe4ZpH9jFkv2rcfMmhTvucFmjC6aKlONe2dMzlEEQQbUL3DgsBiXJtXWi-O0P7pTgLULUbqs90b5gZRtiNXKi9-3gQ5X97S7mgWNGzHF813qU9Io86HFcoDEdVR8sQtvozFpfhLfewbZGsGEhDkgbHgIlv5EhPUN_tzL-dXVJSsJ2IucX6JlOkcKnvRp5lTNx3bKXTiXdLjySUSEl7vK9yGwFv7fh7-rRDgbGlut_8QL9aUEt1CIHrHX1PbRtSNGaOT-_7Ny8EUBu7KgUcj4pKFlSAW14cqVl-SZATCqvkByjN75zVK9VkT8PZT1iaTG5lkHBcUN9UYYhLqf2oqBPPfn9PJqv0mX4jN0_h6hHxKU0Pe0d_aGFo63_KkHx24TmuRJpZccIRnhTwaqkcVuYtbsrztRpApImTqVgr5_UU_FSfWC1oeGEcmjkbqxlCF5Sf7eU5_JI6MeLeSVZOCCq9I35_4CqcYbl0xqpp5EBGnEvuMlqoa7eWYiMhSsPsp1DsY7bKlhXM5CDu6uMgshmj0Cp6_P838eP_jIESs9IO9orePHy6xTThESqZA_4egm_hAcB5JPF9NHUtnqBGd6nrrFZpFZ7d6HlNNViD_PuvQHzQY9tCs6NHyzfuo2-g=w270-h284-s-no?authuser=0"
          mobileSrc="https://lh3.googleusercontent.com/pw/AIL4fc84pZt42MljHXYNLhdi67BdE3ecuVFyzWgT19x4HHDQ6nSLDoXMKOfGH6ucMLYj5HjTMBo-drEoaeIpXixZWqYfJ1-2ea4yOCwtH9e4k7yOuRHbrIB_sN4pyasyIEeiBarRGph0qYFMiy6hOE4GwiOtjvxu0K6GuvbNjOFdfEajeoEk5qwXLcUaK3jN8UURdw_Z3C8j_sQ77qg7Bla7t_rbN2U2mH-LPdEEd8-yXLiSsBzJUjqq26hqhSGlDpSBCHghD1cq2o8-saD4vXxSZU1ohi_gxbxvygaGr8P3kvL9snhT8Xb-JdKKg3EltLKYlzMzAiSM280XAaSndqJTz-Po3sDZAtp8nTykKkqifaQofG57FDqcsSpTvloCNZ6GFKU-1or54QUZGIDTeHErZzHZ5VQug9bcXx-2iOfatxa99L2bM16-QUYaqr9M_x3kI5L9RIwEGkaOI1OKqUQwGHEwf7n2lPYfeM_8k285glT-porv_FGHmHf9pKZCGm1ATaeZ2HP7V9r3BncGx61nUrFMzZiRK1IQ8JM6V_QhIV01v057tvffnThjC00U7fWNPA90b8jZ7xA5bGqvDTBwra8czzpIekQn9evAM3LKWpJn-YdZeScaoy7YI7sVzaO-aezWEZoh7ZtoTBmoRzbSbb9HFZHLL9XVpzWwYo5ABrOySPCfpgRU4KxabuiACziFHnZhwfLnxjtwnIm5LYIONFgjGntKDa_ZmQQr1iRCG2BkdsRW2oC8De6uuGNPGFHvXT_kGTDeUiiHMewqSKAJDI8sAYyb_NY4eiuZl21VK_Q8ihV6AAjVYEwLi9uQaO_FS05BMH5zc8xAZszeRHwKfu5ukbDVcCuUIL0GvMo054b6MMToFNnZwsJKJX50ji1Ii6v5yKW5HPifA96aFDDWRdhm7jxbr7UNrs0dWXxA8wFnvi73Z5IOVhuuc2E=w573-h284-s-no?authuser=0"
        />
      </div>
    </div>
  );
}
