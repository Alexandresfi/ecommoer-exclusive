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
            src="https://lh3.googleusercontent.com/pw/AIL4fc_Ere24mrwshcVSZuQZJhBH7f7r2-rWQi-ZfI8gqyNLLFYEbb9ZOvpsUvYcTcXWq_bh4LQUlC7owrWcrl9-vsGAD622kqfNzVkF9BjzTxIOBZ9X3Pq9BIbXVnnd1JUMg3qk_CMNKuGBDsdIeJ95Wqi7aGeozQDGyO9p2B1m-SPjaoksv-3xR5K0-NEVs20dhoT_VcLSeCcMw1q8TJqLMMscH_rHln7Goi0YJqNaM2GP_nLe9GHTuPGkyh75XB2lLtA6M7OGnUMC1ZOxQdDrtfHWgqItwFXWeCvW8bDy1YQWjngNTGAVjUZBBvnpHxpaIMpfZe7kgYyJkUlohRVHhHaxfphox0L0wnzT_koLywXqkq9kzM6AgUUQnleCCR3cPnJzwdePnKChCZBco1aueD1sCHD-v4fkBnTameHUIPNtLtKTpUF1ChNehyrAdAzUSVxqD-w4uD1uaJCUNXBwrdlBDRUCLI1ZCU1C6wO02o96VwwxI2CHf1BXjSCTyXaptZ6NlnKbZNTEwCCgWvNTTJLx28ir5DRw_J9fa3CdfqjO5PbXJmsd4VLhZ4lHqEbR-g03QK0vRaMTh05Q2xKYfF9uRGOqmI6-RN68-3x_uVla4F9W02XwZ6PpuvB2o1JwoFbJZC1arzg3zu8_fAOuMjkZgTpBNdHCI7xtBiHWwMgF6agR3eh83MlDaSRSA-mwqLFqNG-bqz6kbchnRe_B3tlTc9zmA5txu6Nb5f88i5z8GKPE57znOVDBZ-shQoscPKu_ERlTs3VrCFjOgHN-ZiGXePs6iMgS0V_xmDuERGSUvU5mZ2As472_nPsAiiQQAXZXAuEFcCUHD6-winFpzn6rA_RUosYMDTAjQC3JUtAhlBUZJsCIZxBUrPBz-CXKu4u2CBU0-zT8gZ1UgUqYBCrBVfNPffN99AkwxKf0hHzbOLmitsAgNbI_2LE=w570-h600-s-no?authuser=0"
            width={570}
            height={600}
            alt="PS5"
            className="lg:object-fill lg:h-[600px]"
          />
        </Link>

        <Link href="/search/moda feminina" prefetch={false} className=" woman">
          <Image
            src="https://lh3.googleusercontent.com/pw/AIL4fc8I_QNX9vTC50TPJRR2WBuO3WrPc-RTZZnD06blSsyagjYDqyVpclcjeYajyDIw2G9XugfwUblepeScnCYGhFVGgTIUW98q1YQAfr9DpItUs20RwriLE_QPmQRK3fIL7rYkvXBhyeCr8Mp5Ae_tvuNUVqFcvXWrtEtdwnSCXbB7l2Snb-aAyW_BUTWPFfe_DGwKs5_FPC6jEP8b7rdHGA3HxwXpvOWvTMPgCyZoKarXVR5ueK7SfrziKFiAjuIJHeGWBy0QwYQ2Gx3qDov8V0XWwKu4kEJMlaZkp-7qnHeIzLnJcT1Vp2PdzkI7YU8iAEqD5hs00pI_6xtkRUSf0rbIraXCkWY1w1qocx-eAgD88PgFxRouy0cDYktcqdQw6f8NP8R57LS5inE8afh-2TiwMUA48uXBWEu0Bhw_mruF-FhI3g3QopXHi_yctt8XbmW-mhxOT_AmZL9B6UryL-EDQXLY1RUl6Z9D-H8aMo0T_hVkt4qqpOsr9Rsi1UkhaJBGLwqXVyjf6RRbSSy8ri57WixlGFuQSuLFPWqS1zDRi_Q4h_QE2S0sj7RSwU34SRt6I0NbrA7QHxCBgDZY7sK0DJ5JSiRbfhcAfmACU-PMlmIiUEK2L_MWQlexWvpdC7FZB-Q209SxZEBFVqgVgVw944-7npTkovyCw9hd5RPiqxnSroOXu1nqaqDpRMyq-I6xCQ07qblolpCfqmrARXPFhLjmJQbWOWVJs1s9Z0Z-1tinecjV2te6eeMruL8bTzEf6c-2hC9ZtUBUuQHOJ_fo03tCV-1ppDVl2yS1DL6zHEJSl6BmadXSWi8jbETUAwoOzmTFUJLGCrhG_Q8xSIYQRfzTZxs6q_Zv-W0nXzHgqzZlsVSb30zvK8uN2YMP-iD1s0r-aMqruCDmJIXTjmq0BPK-AOb6ge8GXIvPv2-DRHOJ0nhSFoG880Y=w570-h284-s-no?authuser=0"
            width={570}
            height={284}
            alt="moda feminina"
          />
        </Link>

        <HandleImg
          href="/search/alto-falante amazon"
          nameGrid="phone"
          desktopSrc="https://lh3.googleusercontent.com/pw/AIL4fc9O1z6cOIn1DvMTZHl1BkUFE3ibgUqPakEOgQCJPn0tc5coRi92B8QK8ukLSSXr1Ifb-b02MjuyviQ38LxevFT2UwE6pukf6Eoi3owPHRaLFuR8AkgdNN-EYnuOkErHX3hCukVjH_PYikwc04CfvVQ-q6_OUB-ukmSzN3Mj68D8KKvfiuB0oqviVIaBJ4DxazAifCLuRmv4ZRffK1r8Plz2uREpeqgSnKOur24Xm2LhXRrrkYMYWw5EMfGjAlD8DQdM1aQoAeQxmsocj3Xgik-cyxU7zYYiQn8ztu0iEqjQIf7NcmOecgQ2kZSxbNWXNmhALz2sSlChbd5E7tffZ9QTTvAFhriTy3HZJFz8dH2azVvOjrkdo03lBgIDgit_gVNfDAbaL1D-se3Z5xgX1TCuYeEBwKxI5f4L80fJA5UIDNXY5V_rRHgGU3iwClLU8iHreAOKBY4S-9MRO8q3_s73yEbJt1oFBMV3Jsmrsh_KtMEFheUWkwZDJ74j-DyrW-JPli0-l2SwhsKX68DAuRuJ0MkKTS68VPIPUXZGjDJmdkD5S4NRN6CV4C2wEntLgTtyaPEbbJPLAoR1ww35g-b85NMzV8hc3s5IlCvC4_1R3VmjdL1T3yZRh3qv0Gavd4Y7eaBD0akDOr9G1JPEIisswb8FaUVaFfJiOGTMle2urixVkDItoXZLM8v-0xxpyHPOdkER_FRBqwQ5AQ6YXfiUxmr0h4LK-mpXJ6EeiQl2ycUaFk1ZwgenfuQRxUvu50Odjt3cNb9rj0RC-jwjARR9RbyFs1NlYsu5AL6zqnU9KC2cgKQrWQREMhretJF6NjDxB-lXN3iKDqFR33PsJfx0YRZorZ8TLgePDhLPlLLAVp4TwYPm62s3vlrfOXHJglelrjzLMyYAxZk0oACYiKw2r-kMVBmEbSKbsm-AehEEXbiEfIMKZ4qokGU=w270-h284-s-no?authuser=0"
          mobileSrc="https://lh3.googleusercontent.com/pw/AIL4fc-5FSMsQCqyGUMXO659G1IQ5LA7xE-7qLL-IMoRll0ocJt6T5iSln4Py3Bx7C1UMpzZCZA0G_8U4-jIy7SQ93UOzTraUHzbO3pxXss819iDVp-iwusEwDi-cpcBHuuUcO7Z4rSpfVCCEHhGlxWUpeye67IrqKS-qAtGy1EX3yni0qrUWQ__ji8_4wR6UGoRXLzm315kNSqSGr0ItalcO0dR66KjyLLSmUWac013pK1nz7HSMzODQBbREMSZ63u7A8OHRTvINE2L4vZlnpo8ULICEu8A11W1ZaDoHp07noPqSxtq1V5ecJOYV0dIW2Koxt5rwwLoxZ8CpF-Qwgp3iN8AxMkTR2rgBSM_xIp4joOnAo5_iq9vNp_6rk4y0IAlkkXwuKnNvmsuzcbrek7NsAGnineeWBO5GxGyJVXexGVpg6Ht83Nztq8EFgITvGXbYhWU0xFsTUlfBX2gPRseM0jZtWXcEHt9LRFE2p4SmFzvuT2phu3ED2Ph-A8YDgf9lsT8OLlhzo-QR3ezCjcy5YyaQiqIACMt2Puq9bBHlESgiNIitGv3LQLDCh6GlEZAM6o55tv5trHVFlQZQT0Kv_oZCS073GKbAI77a-2Yy5w3lW-wkRMW64Yi0ijRBg-FyHeS09PBkUAeX04Rt0pUAjIODgWbl4hI3MvlUE7L0aBzgKBEY5G6DIVo-o4uoBQuKRoBCSOALUKDF_GGdPgDtVayazZvcjGbUdLIn-ePLSEe7b6CpjcmBAEWCEknUY-uPgwiKz0UnWJvyHNU5e31NvYVbwqi-VbDc-FsNqWRy3k_GD3UVdjo13elZpcmFD1pEJ1Rb7lIgodoI4ikDhV3f7DU-NKy2yojA1MGgmJxhs9pmRqRqQA2GCOWWcicxtdiRiMlEO3TWyJ5Rypc9rGcAsaJzrxYwfgAUm23o8vXXm8rtkR9aE7o60y_gas=w572-h284-s-no?authuser=0"
        />

        <HandleImg
          href="/search/perfume gucci intense"
          nameGrid="perfume"
          desktopSrc="https://lh3.googleusercontent.com/pw/AIL4fc_SLhvDP6bpoDvPNG6bjAmhyGcXNxsK6FZB5SK42mhk4OQDAj0u81RyZElgJJmD2AT3wOfiukqYGIm7NwDaEoMG_ezE8dR7RnCtM_XXFII-U8giPy2O0uXN0k4201DRgj3uFt2IwCbcw2CBOL1a8lmLm6oc0J7rF03PkpxVlu1IBraH1GSNPn-q0Q4ogygLW5nGVUHbIfQRu-lLWGIIzQh0riNlIquiQCDq8mb9tQ3EmizFiMxWGfwPgeEbSEilLRgy7oH-zhMEubSRG8qrGHJqqj0Dw5wsaEjjRtYO_G_TWWB-LufUiRckVrRFo05r3LcICg9rHagsB-gF4MNsAkwkZgh0yCB3bWp2vg2KGonejBcun7rN3LrwGiLQLVEVtDka2tpa-Yq1YLeCaFtm8qJvQvHImz5lQQ3DN6wX6pWZ8Ql9PfloHIWQMoyUTY6-lHIyfRBACPxbUR6CcLtpWtwkFzU0xsCL0opuqFzYjcATXhnzISBnFCYJil0YeZvbtldOq7XpTDQnNGpiCdAGVZe3ZJCHmfZs4kOy6kWIEdYJRu47bU66BV621vBwsMGI6Q3zrUHXp7vzdeA9L7Jq4M5DZdp_t1EmeBcGMSmqHdmC570SsrTMLL3TNCuViV6-xPRzAW3_NNky88paq2O5-au-8BvJvLwD6m7QCcOFtbLiU-feeuIcy7NeWJlhe5rmZvDL04so3Fjq_Da7GWVhuXRcxMhLMYTKUaN7J4LNOE7M95GjXiS5Mb8onhCckyOhMNwVgIJFtCg4oJqezi1UjVDwtKLs1AwaU76_jlob3HKiJ0PcPIXL8Oj48bfw6_x8cVwHWXu7Qx1bJYMwESARjinN5knCRXNDJXpXbzlc4RSdCezE3_mOVGXhDeRqlWSh81Pc6DKHT-S9DoRKIFeTmXg-S21t0vlLupgwSoohflE-XY55GPfW-01lMW8=w270-h284-s-no?authuser=0"
          mobileSrc="https://lh3.googleusercontent.com/pw/AIL4fc_tkmgzovuIaViYaj-rkz4bTS-L09XZ3c2CSBT1RPaqwFR_vvqzaeAWopPbZXlemDyuPakjUpnKWwdcYwoqNPFv6ABPOwr6lHXqWrD-8sbeE-F_JZ4ZCpev83KWMOIplqp6QsUn7YZz-MmvCArM4Buqiea7GtE4VxZoIREGz3KqAjMNbWmZWOeeHsqRDu0gasCjAFbBaqZlUrDw2DAHM4mSn0MTQu6Ma4GsvLmPziQg0jikOHdpY1QSJFDqaHOD-3OzMQFFwJSHPj6BlHAYuksFaRgprpCkmnQhe-MZvGyEAxVN1MQX-9L6GZLGWkz3FBOwVQqIruaBHFCdxbltmi6cy80ubUcwZtMgBXomIYRbighu03P3UVLPVXl3_T47-uW84ZhjLW6wEZ1ywyKx-ecp7O7PlFFIfcWMDDahHBb7kgWWL6g2SUnU9x8vE7RP44tTi-lnTbDNdZd0F0HcCb4erprxyybLn9UiJBvB0u-kC2EK1aJXkHJ8HKswlsN7R3NFxF8X8yCb5Wz2AxA19SWECd6MkNVdZreMUaDRpKxxEbT3KMej98IujzeSIDKVENoX88f26jBSz_0P4lgjtXxK3KGDGGazuwzw9Ula1_6Vd7zkMviU3_FTViiX7eSV-b410HZezxPnrqJ3VTCB-DGk8eWQds2fAOMk5N4dkzNmdf8_cahY-vp9eXXiXI7Hkd48EMiJYp2CVe6Oz5Qg4cBxqP8r-UbRguc6jf1pw4oZDKRWQCzA9xZae429TGq_L9o238MwF9mB9KtgPbaud0XH8ZcSyKHa539Pei8LRcCIfv8qndXuY78NhSI3HP2uOZdg4ad0AjZjr0raEJdNe2pYevRfANR7JUh8SiLP5R_PkojpdywFM5bWAC3L24nTGy4fD_93qtGewe3sbQuTPcvbFJ4oXNZpUxLlo5WvprZE_cyj9b7619lVI5o=w573-h284-s-no?authuser=0"
        />
      </div>
    </div>
  );
}
