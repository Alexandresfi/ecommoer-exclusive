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
        src="https://lh3.googleusercontent.com/pw/AIL4fc9qkfLf58fTmof-AaSOg9qxJ2hb62Z_WoMY3WkOXLF_hasd36drXwmXeYwSTJpBw9Q14ZY72QN5u7Cn_MqHR-EV4MIwAS4_sF8JRUkCDhUjYBGL-KuLtTPCIFeRbTg6JmhQ276QJQYHYICuEuZWI3TMXpNjVgEnG17Thx-qpf8F5lpc2g5toeCj4ZDgbVTbddL9ewziJoY5b_GCSC-KA5qLu6FuDR__2vyemvNighF5wgWYta2ZsYUxW0W9-ZYanAmA8T0NzVgIp4rrrYkaNM_oKvb1-Sqb4GiKFiMjsL0GzQbdQKSv6TALp_c7yFolV0My0xPvNYZ8mg_iBS_X2KrYBqXEVOggGvs9KujKzqLBpCcBWmP4pvmQ8ObgHkr-xqEd5dUWhE_aBnZeAfg41KIXJkbbaV9eE_KUUDhEsbKN56hAlmmBJwGBLqAcXnVPSz1tMgaQTmfv5BYntNcWC3nEyofBBLz_eXIkkqnZLEmgqdIzCALtlNNwhhe_8Q9tOdKfN26LOJTaZ_04VlYFZAwcrxemPd00cRLbJMmLw0UBxIsohOmbXmP_BV6k5gsDUxQq4p427ZJBveQy-jf_MOH2ArPUmym1jXeYsFdEoiQeSSti6dWP_Vxx2uGX_xtDSsMUP1fX0n87KoxUEX0KftPL6yIgPc9fdb0LNqck0Kkz0MP7hPUKxIK0Ywfw2LvsOs05FQ0p5n34GcbZilkFVbkMSOCzui1Egxq05yawA8rvA2Wx1T3SFEt0XQqRSsLbIU5XR03atkJdvmHfxTaQo6L9JBo6pxoVWMo7h1uRTj2gybWMTh6mqRocqSQf_5kN3vTSxgBpZHvOT1prOJfg_3gTrK49fb9qUX1V3lb6GQd3cxiyfiSrVnIlLUZgP8wCRvAN4wAGmhvpAbtaGiskUBzlq9ePth2Akcij4YSGCB1sFXnDgrEC_mF35rY=w1170-h500-s-no?authuser=0"
        width={1170}
        height={500}
        alt="banner-desktop"
      />
    </Link>
  );
}
