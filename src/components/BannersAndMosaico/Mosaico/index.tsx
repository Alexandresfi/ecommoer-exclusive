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
            src="https://lh3.googleusercontent.com/pw/AIL4fc-5JufaK8X35wu7Owna5-pf3HO7w45xmtyGpc8k5t0vhbrMxy6Pba_4Bz3BEvZuqP7q0QPfVjfGLYOlI97Y4RssGv15NBYmShbpU9v6e_VTCboKo5AtG1GdhWSPpCisvyuAs7bz_rVkA_EkdrHxZA71YuRM_J1EPjbs6ZCRe9f4B9Q6CLfumK00XqHSzzOF79SJ0h7z3tvFXfO_XVocNRiR3QsPJd8WGGhszHNdqd_zC-PEcIJoDZEFR5kDXkpquKnHlRAfgx42nQqd-tuey59szT-r2jjH4pyfcLo1VnNuTJghorDKswJisKbelM2lBSXmmmOeSdHSvoYOU8gBd47TW7grVpqpKjrYFWC_qhqpKTEJpy0mG_Vn-4XY9PrWLYv4nGZ9AbSwHFjlwLTNqmP5PqKHEVI9YGYUD4WmpE0EKQ0rIq0wAMH2W0cd8TYDe5DyTy0surJWNEAB7rc1bugt-oohKAO-Lz0lP_F8rFDI7E8AeMHGV8oWnGGR9rFV2usF_fgLuhZwgjvxgKiKYozwaNbnbvk-z972AoqtkdaH9jxxCxMjNIH4qFU2nvdkV41fx21udKwr7cNOSaXsxfM2shv7sPDTrGYnLqj2TyT_yYyW2Y3P3XTNjECS9dSK9Jc50Ezfdne5plm0dmYsGUMEefg2W7RNrIFmoRR1qHpxkbVk5dDgu9v5icgItqhtxedVmLXenUufFdAdLOyyciqUQrTGzJxC4wN6fb9QO0b1tNsshEiq8eWafHWhp_62Kq7kKFDxmG0cft1jLA-6gjo44DHuG1o26DIL1FCT2sO583D5E4fxq5JWNs9JcTodUe2RMnfHM-98-35G-0sRtxm0_pDdF3-W82R_cpTwnLZE6H4sziX6tHw3i65eT1if4bIS_UK-733p3DVU0r0RTePStrpjzDVjAMGd0TpS-soc4g7IwEekhz3TAo0=w570-h600-s-no?authuser=0"
            width={570}
            height={600}
            alt="PS5"
            className="lg:object-fill lg:h-[600px]"
          />
        </Link>

        <Link href="/search/moda feminina" prefetch={false} className=" woman">
          <Image
            src="https://lh3.googleusercontent.com/pw/AIL4fc-zmuUFTEKw-SDny2qAYrwWLeeNaFvzxV7xAdr62nGp8wq1_ujApHieES7RYT00dW1_cf5xU3no5TW5nU0BciT1vEPfEnVgnlrEUoDnE_VoHER6JFfLIoEs5fdpzsqmXbNg8dTgAIj1HPGYGARV-KGRgHMBQj6H5AcZ0mNqphQtx1KOfKT1JuwWxVG0kTyCyIHaLGddmuIgF3vTActX6LX1tlo2VjRRpDgGs8m9kdRaLgC6n1N00jdGac53ZIJRBEEMfGKsS-Iw0ro-EPDimWTkIbtPY2_Udzs6FLlcyv-JWPSDrt2NqqRGXZWWMyxuh-ffNkGmkfXP6Me6tJZJ5gRjiowvp7VNkEi48obu_04-vycy9Klk2uELah5ClqAPIsc0p2EEJoTQuGzBaBJP76YR283bgToPVrk3Tvg4yLO0VzIRSxrotOCg_aYvh8E802l1lcj1OgRaPMxB5-6BgKvXxTVVLNmx4-wWuQiAHM_K-FtM29moj6PfXx25ZQ3HN7gduxxBIiztc59j7QgS2GR69RCHvlTiHHIpDGJl8VqOujPEKUqmfyoYpwCy25DaVsTVjlxMbRE-S14UykyY6u37ax_0hwmDN2uiWIMCxG8pYmSrWmKPbmcye9y6HzXbSprZ1pSNMEMfQf4WiGBIVY7DGDaryl2m8nhwC7e0uotUUEf5JnBP47Fm-4WZChwqGavDocr_ZrUhdpjJBRbNc9u7NX3219et4iMF4_Df_8i3xKC6lK8QP2nEYtl1XqA0muoAPXZ0SxSZJURN15cvoXCQrBp6JyHLsA5-n5VBMwxZsi1vzL68e1FOoxNArYJX9JDt5UmNgdtmTjBoPPs0SZ_wJzhhyN94udMbXIzxtq00PYvQ0177R-e6pKvJcMWBiE-8uwQ9kXDhd9Z840xAmFvTsRERmfaLDGYdnnGXhOqchGmNYfQz1PGQOgQ=w570-h284-s-no?authuser=0"
            width={570}
            height={284}
            alt="moda feminina"
          />
        </Link>

        <HandleImg
          href="/search/alto-falante amazon"
          nameGrid="phone"
          desktopSrc="https://lh3.googleusercontent.com/pw/AIL4fc_F6OijqeulCCvsiT6uv2z_bqkPanFUWW_o8r2vtOqIzwYUMZyLECIFs0hzK3MVb4rox19Kb8tqCm2C9q8JMJMdklIQK_suQiC3r8GWFloJQyYNQiNirm2RY9fgtiBlMOWsIN77uMgKZZDvqZ7V3CWqf1XRyQwjAxItAJx-HP8aYA_DQRUey3GtYZfJpWotny669IDXZHjFMTRBzY-OOv_Dyp7Gk_G6If9ckVLxLQ5fZUFTh1Lx3A2WCuFn4Lojh6DOk0_7gRG3G3VNncAn_XaUK10vOBGGo92xgCJp_K_Kn37CgqI1j-MRHUijb277X7i2ZqIutWEMnxxL768jJYytKIBXue5ACBfxfgK-YN1SUC19K4cmJAW0YdUEEjjHLX9BF8L9K-Zei3b67S-91TH0bJNy87jfrqGxduExRMfAbsZhlOi-vg5rdM9BqDAuOw8gQoYjErXjc2aP6rV8XmRWWbgUlhyrYpklcqG0pz2bLbHoPqre-QQ3naVA2gNMiPNxTWCuMBckQLbSgxeHD_igz4wS30TFrdyCg2XxMqpr_wwY79gsFWe8-m2EEwrV1joGv5AQ1zRtIEiotH5YByr3BamWuC3gk-GVqLLalvf5AbchZwFT4rKz6gb-BBZDa5ab3nQN4BiFeujCHXRiXIibaaDftNmfF2-UoR4KNlxAnuOJ3rpHiEna4As3seoEFiPEHV1qnsM7lYry3rDdUoj3TZb1h1SG4Dks_umfkZ-_S0LgP_za2iZk3M6-O2aJ-Ek7wWYJQRj7uljIshCrSDKGPvAabVncQrviG31VcRk6ya6i7Edcv6KOCEvXa1Iu0LUOXazCkDNJvBC-vLccA5WfaMAhKDVqBDretCLlz2A5RuhLOt9yDYSLGLH60oxSpm-QaqhlYBpTNd8BcK0G59y_q9g13S-O7GtXLeyo6nE-YE27353jA_KBKog=w270-h284-s-no?authuser=0"
          mobileSrc="https://lh3.googleusercontent.com/pw/AIL4fc9nhozLe7bykoh5Glyvk7apA_c9Q12zSE-R67m3j3PAHWIjq1vgKJPH4igi5kvcqaztgnOTCFd-vTPXPIu1cZSR6x30vJ5db_EemwG1uowRx2QyLYhzMKKbk0sxoOUYuEgBcn4fFdkioLClyCyK0oXX7Yt3EBBH8Liu4DmQNhXpjS6FCQ4_6u9UFRZCLMaiQd5OEel5_5lSh_sprBT2iA3CKPiEpAg1evvkHYJtleGi7NRps0JrU-GkIJL6zpQBn4Ewjuem0Vb-CunXqenlloRpOV78QTwuKdeloidl0btspyyNtTY2UxZYrI_R_W-lSy8bqKP36rmk77hHlHvAgSCTczFEVXWfdn9F7InEuIgTZKXDRt3nBYtWLFnWpk16T3Ov4Vcqv1Z27ChzU3pLS_NB219wWM7Gj-Wo-SKbrM9Xlq4PlRHszwTDBVemXXN7F4jB-HCPhHYB5VBMdTQGV4cS_NrHK-5RSz2i2VLlxynYQowAJCT41RxTWyGxVy2Sr-GtjANsGrjApBZ8AA7ANJqQu5KB0pAgjyYq7Frkpa2a6K8LmHXG16yEMf-1OcVtDx_hMh4akNMcTMb2IgmxO079uHr6Clo7B8zF_TXX6LJWmdrp3FgJkiFvJTP3dmMwB5ZQ1ePL-UQtS3Z7Qbr9cwNW6HYhb6j4I0YU8IjQeQY_GKeqakODd1vzdl06fX6l4fY7locZ-RowbcuakEq5C_E4uJPCsjvxFISuGJ67znoeAeSYiRqzUvObAGPFz5_gu6Fmky8IbUNK-BsFOeJYRU-lCBA7sDiL-4G1Ai3dgXxgoBwVNuej2nQYky221OccvuRiDfFvZ3EiCCVNhVGIs0t5omRjhCgO2V5IRb2AJ9CePYxEGnVt0BCz6Ut869qqyaG2Tgxx-O6rm2isYmiwQtSx3y2y7-7ElP_hbklAequIRQK5Ur0Nnrfv8zo=w572-h284-s-no?authuser=0"
        />

        <HandleImg
          href="/search/perfume gucci intense"
          nameGrid="perfume"
          desktopSrc="https://lh3.googleusercontent.com/pw/AIL4fc8FqYy5H2gt7kQ-csByp_g2nWIeAX6CcS03eISghszN8CHgOMzVWoq6Mt7lmxjjvSStivEdRFbqhQ5dadz-H1RkLsi8_CIu63SqW1V0WUumMIA7OKem-1eSbt9P19GvTOvHzldp78OPZ73WbQPApalsugNylFxfA-llykM9sSfgvvWrwXskXsodZ8xl3_FV4myYKZs-uL5gWLa9IRb8io4f0AvHEfqfw_GxDL2GvG0vl1ImrtM3TtqP-LMh3FF-KfzX-Z6b-OESBj2eZren4mZB8t_6CqaLKHGBf655zxMf34UTnQx_LVLbNFe9KD6WoBASv4Qt6hNpBsXOkRQfVcNqiftB0mgwoedogVyDV3gOIyiO4PAIGKjHrZ9G_xYRHYbNlx1rpgORygpAmdEPw0wp35bK0sHeIa0jVk0xedp6txwca_gQnLzuxuKPHFfMDyncIgr8LQoIDo5bNMuNKYT8DJ4HNUS4MJcA06n3LjojOgljIUvd7YgKlW3Aegtv80CBagX8J7ktI4EoDw9sJ3Yw_9moNRclAyLBik8MNPDFhyt8Ssu6glyhcsuFROWPxnECJwi6v_8VbPQesDnTOG1N9QCPNS9BFGEBCGebgnKmjBkjC0jwZt51cIPoN0gXAMWbf889vlc1sRAzv2ktr2bVFT3ptxy1v8ueZFHOjS79aYvDjmPnc7vmwm6t5m4SENDnH-4_rwPdyPw3jv9yzoaZPI73IE3MPU-6Cgzw9qZ2wsr_MYSWO2Qh9FvZ7ccPkcgbGjXkqLGoIVWqtxqoFG3Kiwy89ny3VWg17Ec74OHmmf5m_lJ2Cuz1alFV3S7bM2aSA8EnpMG30ORcGW4K1dTmr_uxhz5IlJlWzAxwH2ye5RbOJFIwibDwWC9WSl8Bx9VmK3Tq2GJp-Ed3tcOjA_SbkXOCI5_81oMiCRYISgDYCG0WfJi4pIojcRo=w270-h284-s-no?authuser=0"
          mobileSrc="https://lh3.googleusercontent.com/pw/AIL4fc-4iosHg0Q-t1iKkhn_crjEbctBuazYlw9T2t-yfM4PhJfoUM7E-PGHwlFldAZRR_zmnaP-TeZPPCPCjKXmkUt6OL3IHrJiu8GdJ1pNVUpjYwbRwlqIKhePU8YNkNcJkXkoJjAdk5PybGdxRy4f6LPV2_ZrBUEqFGn6CVoYtjvGB9uBaGei7Nd_cOsvvY_nKYf23o6eJTpwVwLG18t6F9byiU0PkF2uu1AtgiHPDXvl08IIQRO1JlGTRLAF8nXURk28AEjwZBB47g6lKuuZzzvcufQ-qBr7jo4aGbEZV9Uho6PCbZdglCnJ8_OdFp5D7QLf5cCZogYQIi6SegDQ30LZINAgQVnTu-Uz4W2-KdEpyHEXbvru_U6fyjSo_ECKAe7eQ35CQLC9g47MD3PPO8-pLOK5l6U04V_QfbewLUilKrNhte8LcgZGI-lnSEtAns631opv8qGDoXfCVY8iQhljWX8PBnGC4ZOLvQap8J4zYUEQ2bwUFvBzZzlOIen3oqH1baGvuTGLjWHw-9Ivvpyc-I7m69mqIUm7oVZCjI6St6QxtQdpduRdKWmPd4uAnc0fnN44Bp_2-4LKQIM-xTq1d5Txbxdw3w2NetI_TE_UzzNy6rLkUs6VALGUQhUNa59eVNJrAO9Ep0js8tuZq3jrENOjfzGCGM-kI1UU4FQEPQQmjd1x-k7nQZQ1T6akOkUzjVmrI77L4YWB7TU1QDcKaQbuIEPQpy9ujZGXktZTDQ_3ocwmg1i9E-yEo6sK4EKzqfiMWdh4UhhKV2PnwRjaGeYLWPKsSuIAy8ZL9vWmew6Rrf843-LyxpB_gkK6mFInNk9WyMKVpbkumpiQaTPI7yvfDT314SkKHiCM2hGxPOKlR5TbZxi2GR1uHPVr7-f6HIznNawCXREj0eJP0HGLnawGd4WZEBvRWrVGNRwpc7rtmrADxLLuvVw=w573-h284-s-no?authuser=0"
        />
      </div>
    </div>
  );
}
