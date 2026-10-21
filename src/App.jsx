export default function App() {
  return (
<div className="min-h-screen bg-gray-50 text-gray-800">
  <header className="bg-slate-900 px-6 py-4">
    <p className= "text-xl font-bold text-white">MYBlog</p>
  </header>

  <section className="bg-slate-800 px-6 py-16 text-center md:py-24">
    <h1 className="text-3xl font-bold text-white md:text-5xl">
      โลกเเห่งเทคโนโลยีเเละนวัตกรรม
    </h1>
    <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-300">
      เเบ่งปันความรู้เกี่ยวกับการเขียนโปรเเกรม การพัฒนาเว็บ เเละเทคโนโลยีใหม่
    </p>
    <button className="mt-8 rotate-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
      อ่านบทความ
    </button>
  </section>

<main className="mx-auto max-w-3xl space-y-6 px-6 py-12">
<article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold text-slate-900">
    บทความที่ 1: ทำความรู้จักกับ Tailwind Css v4
  </h2>
  <p className="mt-2 text-gray-600">
    เรียนรู้เเนวคิด Utility-First css เเละการตั้งค่าร่วมกับ Vite ที่ง่ายเเละรวดเร็วยิ่งขึ้น
  </p>
</article>

<article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold text-slate-900">
    บทความที่ 2: หลักการ UI/UX สำหรับผู้เริ่มต้น
  </h2>
  <p className="mt-2 text-gray-600">
    การสร้างเว็บไซต์ที่สวยงาม อ่านง่าย เเละมอบประสบการณ์ที่ดีให้กับผู้ใช้งาน
  </p>
</article>

<article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold text-slate-900">
    บทความที่ 3: Responsive Design เเละ Mobile-First
  </h2>
  <p className="mt-2 text-gray-600">
เทคนิคการเขียนคลาส Tailwind ให้รองรับทุกขนาดหน้าจอตั้งเเต่ สมาร์ทโฟน เเท็บเล็ต ถึงคอมพิวเตอร์
  </p>
</article>
</main>

<footer className="bg-slate-900 px-6 py-4 text-center text-sm text-gray-400">
© 2026 MyBlog. All rights reserved.
</footer>
</div>
  ) 
}