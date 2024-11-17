import Link from "next/link";

interface HeaderProps {
  font: { className: string };
}

export default function Header({ font }: HeaderProps) {
  return (
    <div className={`${font.className} bg-[#CFA6A61C]`}>
  <ul className="flex flex-row list-none justify-end h-[100px] items-center mx-[70px]">
    <li className="px-[15px]">
      <Link href="/works">Works</Link>
    </li>
    <li className="px-[15px]">
      <Link href="/blog">Blog</Link>
    </li>
    <li className="px-[15px]">
      <Link href="/contact">Contact</Link>
    </li>
  </ul>
</div>

    // <div className={`${font.className} links-parent`}>
    //   <ul className="links">
    //     <li className="link"><Link href="/works">Works</Link></li>
    //     <li className="link"><Link href="/blog">Blog</Link></li>
    //     <li className="link"><Link href="/contact">Contact</Link></li>
    //   </ul>
    // </div>
  );
}


























// import Link from "next/link";


// export default function Header(data: any) {
//     return (
//       <>
//         <div className= {`${data.font.className} links-parent`}>
//             <ul className="links">
//                 <li className="link"><Link href="">Works</Link></li>
//                 <li className="link"><Link href="">Blog</Link></li>
//                 <li className="link"><Link href="">Contact</Link></li>
//             </ul>
//         </div>
//       </>
//     );
//   }