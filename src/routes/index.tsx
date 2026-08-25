import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import logo from "@/assets/logo.png";
import bottles from "@/assets/bottles.png";
import crying from "@/assets/crying.webp";
import pharma from "@/assets/pharma.webp";
import bottleGreen from "@/assets/bottle-green.webp";
import nafdac from "@/assets/nafdac.webp";
import stats from "@/assets/stats.jpg";
import agbo from "@/assets/agbo.jpg";
import guarantee from "@/assets/guarantee.png";

import { useCountdown } from "@/hooks/use-countdown";
import { OrderNow } from "@/components/ravella/OrderNow";
import { SectionBar } from "@/components/ravella/SectionBar";
import { TestimonyBlock } from "@/components/ravella/TestimonyBlock";
import { Field } from "@/components/ravella/Field";
import { ProductGallery } from "@/components/ravella/ProductGallery";
import { heroGalleryImages } from "@/data/ravella-content";
import {
  WHATSAPP,
  FORM,
  UNIT_PRICE,
  FORMSPREE_ENDPOINT,
  LEAD_WHATSAPP_NUMBER,
  badges,
  ingredients,
  conditions,
  whyChoose,
  steps,
  faqs,
  plans,
  testimonials1,
  testimonials2,
  testimonials3,
} from "@/data/ravella-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ravella Ultra Solution Organic Wine — Restore Your Body Naturally" },
      {
        name: "description",
        content:
          "Ravella Ultra Solution Organic Wine: NAFDAC certified organic herbal blend. Free nationwide delivery in Nigeria from N20,000. Order today.",
      },
      {
        property: "og:title",
        content: "Ravella Ultra Solution Organic Wine — Restore Your Body Naturally",
      },
      {
        property: "og:description",
        content:
          "NAFDAC certified organic wine trusted by many Nigerians. Free delivery today, 100% money back guarantee.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const c = useCountdown(23);
  const [open, setOpen] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="overflow-x-hidden bg-[oklch(0.97_0.005_240)] text-foreground">
      {/* Header */}
      <header className="bg-hero">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <img src={logo} alt="Ravella Organic Wine logo" width={160} height={60} className="h-20 w-auto drop-shadow-sm" />
          <a
            href={WHATSAPP}
            aria-label="Chat with us on WhatsApp"
            className="rounded-lg bg-leaf p-3 text-xl text-primary-foreground shadow-soft"
          >
            💬
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-hero">
        <div className="mx-auto grid grid-cols-1 max-w-6xl items-center gap-8 px-5 pb-10 lg:grid-cols-2">
          <div className="min-w-0">
            <h1 className="font-display text-5xl font-black leading-[1.05] text-primary sm:text-6xl">
              Restore Your
              <br />
              Body Naturally
            </h1>
            <p className="mt-3 font-display text-2xl font-extrabold text-primary">
              with <span className="text-gold">Ravella Organic Wine</span>
            </p>
            <p className="mt-4 max-w-lg text-sm text-muted-foreground">
              Support your overall wellness with Ravella Organic Wine, a carefully formulated
              organic blend trusted by many Nigerians as a part of a healthy lifestyle.
            </p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {badges.map((b) => (
                <li
                  key={b.line2}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 shadow-sm"
                >
                  <span aria-hidden className="text-lg text-leaf">
                    {b.icon}
                  </span>
                  <span className="text-sm font-medium leading-tight text-primary">
                    {b.line1}
                    <br />
                    {b.line2}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative mt-8 max-w-lg rounded-md border border-gold bg-card/60">
              <span className="absolute -top-3 left-1/4 rounded-sm bg-gold px-3 py-0.5 font-display text-xs font-extrabold uppercase tracking-wider text-gold-foreground">
                Limited-time offer
              </span>
              <div className="flex flex-wrap items-center gap-6 px-6 py-6">
                <div className="flex flex-col gap-1">
                  <p className="font-display text-4xl font-black text-primary">
                    ₦ {UNIT_PRICE.toLocaleString("en-NG")}
                  </p>
                  <p className="font-display text-xl font-bold text-alert line-through">
                    ₦ {Math.round(UNIT_PRICE * 1.4).toLocaleString("en-NG")}
                  </p>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/80">
                  <li>Fast Delivery</li>
                  <li>Secure payment</li>
                  <li>Premium Organic Formula</li>
                </ul>
              </div>
            </div>

            <div className="mt-5 max-w-lg space-y-3">
              <OrderNow className="w-full" />
              <a

                href={WHATSAPP}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-md transition hover:brightness-95"
              >
                💬 Chat with us on WhatsApp
              </a>
            </div>
          </div>

          <ProductGallery images={heroGalleryImages} />
        </div>
      </section>

      {/* Countdown */}
      <section className="bg-cream py-6">
        <p className="text-center font-display text-lg font-extrabold text-alert">
          Limited-Time Offer Ends Soon!
        </p>
        <div className="mx-auto mt-4 grid max-w-5xl grid-cols-4 gap-px overflow-hidden rounded-md border border-border bg-border px-0">
          {Object.entries(c).map(([label, value]) => (
            <div key={label} className="bg-[oklch(0.88_0.03_140)] py-3 text-center">
              <p className="font-display text-2xl font-black text-alert">
                {String(value).padStart(2, "0")}
              </p>
              <p className="text-xs font-medium text-foreground/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Crying for help */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-center font-display text-3xl font-black text-alert sm:text-4xl">
          Your Body Is Crying For Help Right Now
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="rounded-md border border-gold bg-[oklch(0.9_0.06_95)] px-5 py-3 text-center font-display text-lg font-extrabold text-primary">
              Sometimes Your Body Gives You Signals, Don't Ignore Them.
            </h3>
            <img
              src={crying}
              alt="Man in pain with symptoms: constant tiredness, joint pain, high BP and breathlessness"
              width={1024}
              height={1024}
              loading="lazy"
              className="mt-4 w-full rounded-md"
            />
          </div>
          <div>
            <h3 className="rounded-md border border-gold bg-[oklch(0.9_0.06_95)] px-5 py-3 text-center font-display text-lg font-extrabold text-primary">
              What If You Could RESTORE Your Body's Healing Power — Starting Today?
            </h3>
            <div className="relative mt-4 overflow-hidden rounded-md">
              <img
                src={bottles}
                alt="Ravella organic wine bottles"
                width={1000}
                height={900}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain opacity-40"
              />
              <div className="relative px-2 py-6">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-alert text-4xl text-primary-foreground">
                  ⬇
                </div>
                <div className="rounded-md border-2 border-gold bg-card/85 p-5 text-center">
                  <p className="font-display text-base font-extrabold uppercase text-primary">
                    Introducing Ravella Ultra Solution Organic Wine – a powerful blend of nature,
                    wellness and opportunity
                  </p>
                  <p className="mt-4 text-sm text-foreground/80">
                    This is your chance to feel young again.
                    <br />
                    To wake up without pain.
                    <br />
                    To climb stairs without struggling. To play with your children without getting
                    tired.
                  </p>
                </div>
                <div className="mt-5 text-center">
                  <OrderNow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[oklch(0.96_0.05_115)] py-10">
        <div className="mx-auto max-w-6xl px-5">
          <SectionBar>Please, Don't Make The Same Mistake</SectionBar>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-md border border-border bg-card/70 p-6 text-center">
              <h3 className="font-display text-xl font-extrabold text-primary">
                I Lost My Father at 53…
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85">
                <p>My father was a strong man who never complained.</p>
                <p>
                  From 2012, hypertension and diabetes were quietly killing him. We bought drugs
                  from the chemist.
                </p>
                <p>We tried agbo. We ordered expensive supplements online. Nothing worked.</p>
                <p>In 2016, stroke took him. Just like that. He was only 53.</p>
                <p>
                  That pain pushed me into alternative medicine. I didn't want any other family to
                  feel what we felt.
                </p>
                <p>That's why I'm writing to you today.</p>
                <p>
                  I know your struggle. I know how it feels when the doctor says, “Just manage it.
                  There's no cure.”
                </p>
                <p className="font-semibold">But I'm here to tell you: There IS a better way.</p>
              </div>
            </div>

            <div className="rounded-md border border-gold bg-[oklch(0.93_0.05_100)] p-5">
              <img
                src={pharma}
                alt="The pharmaceutical industry does not create cures, they create customers"
                width={400}
                height={300}
                loading="lazy"
                className="mx-auto w-40 rounded-md"
              />
              <div className="mt-4 space-y-3 rounded-md bg-[oklch(0.98_0.01_300)] p-5 text-center text-sm text-foreground/85">
                <p>The big pharmaceutical companies don't want you to get well permanently.</p>
                <p>
                  <strong>Why?</strong> Because if you heal completely, who will buy their drugs
                  every month?
                </p>
                <p className="text-leaf">
                  A diabetic patient buying insulin every month for 20 years = ₦millions in profit.
                  A hypertension patient buying pills every month for life = ₦millions in profit
                </p>
                <p className="text-leaf">Someone who heals completely = ₦0 profit</p>
                <p>You see the game now?</p>
                <p>
                  <strong>RAVELLA</strong> doesn't just “manage” your condition.
                </p>
                <p>
                  It goes to the <strong>ROOT</strong> — your damaged cells — and helps your body{" "}
                  <strong>REGENERATE</strong> healthy new cells.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="rounded-md bg-[oklch(0.97_0.02_300)] px-6 py-4 text-center font-display text-xl font-extrabold uppercase text-primary sm:text-2xl">
          Ravella Ultrasonic Solution Organic Wine
          <br />
          The Natural Wellness Support That Many People Are Quietly Paying Attention To
        </h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
          <img
            src={bottleGreen}
            alt="Ravella organic wine bottle that supports the body system"
            width={600}
            height={800}
            loading="lazy"
            className="w-full rounded-md object-cover"
          />
          <div>
            <h3 className="font-display text-2xl font-extrabold text-primary">
              What Makes RAVELLA So Powerful?
            </h3>
            <p className="mt-1 text-sm text-foreground/80">
              This organic wine is made with carefully selected Natural pain-relief ingredients that
              work together to stop pain fast:
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ingredients.map((i) => (
                <article key={i.name} className="flex gap-3">
                  <img
                    src={i.img}
                    alt={i.name}
                    width={120}
                    height={120}
                    loading="lazy"
                    className="h-14 w-14 shrink-0 rounded object-cover"
                  />
                  <div>
                    <h4 className="font-display text-base font-bold text-primary">{i.name}</h4>
                    <p className="mt-1 text-xs text-foreground/75">{i.text}</p>
                  </div>
                </article>
              ))}
              <img
                src={nafdac}
                alt="NAFDAC approved badge"
                width={300}
                height={200}
                loading="lazy"
                className="h-24 w-auto self-center justify-self-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-maroon py-10 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="rounded-md border border-primary-foreground/40 bg-card px-6 py-4 text-center font-display text-3xl font-black text-alert sm:text-4xl">
            How RAVELLA Heals Multiple Conditions
          </h2>
          <ul className="mt-6">
            {conditions.map((t) => (
              <li
                key={t}
                className="flex gap-3 border-b border-primary-foreground/25 py-3 text-base font-semibold"
              >
                <span aria-hidden className="text-gold">
                  ⌄
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-deep py-10 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 lg:grid-cols-2">
          <div className="text-center">
            <h2 className="font-display text-3xl font-black">The Numbers Don't Lie</h2>
            <img
              src={stats}
              alt="Heart disease and stroke statistics 2024 update infographic"
              width={600}
              height={340}
              loading="lazy"
              className="mx-auto mt-5 w-full max-w-sm rounded-md border-4 border-primary-foreground/20"
            />
          </div>
          <div className="rounded-md bg-olive p-7">
            <h3 className="text-center font-display text-2xl font-black">According to WHO:</h3>
            <div className="mt-4 space-y-3 text-sm">
              <p>– 1 in every 4 Nigerian adults has high blood pressure</p>
              <p>
                – Over 70,000 Nigerians die every year from hypertension complications — stroke,
                heart attack, kidney failure
              </p>
              <p>
                That's almost 200 people dying <strong>EVERY SINGLE DAY</strong> from something that
                could have been prevented.
              </p>
              <p>Will you be part of that statistic? Or will you take action today?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="rounded-full border border-gold bg-cream px-6 py-3 font-display text-2xl font-extrabold text-primary">
              Why Choose RAVELLA?
            </h2>
            <p className="mt-3 text-sm text-foreground/80">
              When choosing a wellness products, people want to know how to use it and whether the
              product information can be trusted.
            </p>
            <ul className="mt-5 space-y-4">
              {whyChoose.map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground"
                  >
                    ✓
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-primary">{t}</p>
                    <p className="text-xs text-foreground/75">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-md bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/mgwLi_iPtpQ"
              title="Ravella Organic Wine presentation"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Agbo + how to use */}
      <section className="mx-auto max-w-6xl px-5 pb-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-md border border-primary bg-mint p-3">
            <p className="rounded-md bg-[oklch(0.93_0.03_140)] px-5 py-6 text-center font-display text-base font-extrabold uppercase text-alert">
              This is not the usual ‘agbo’ (herbs) you see them hawking around or from someone's
              backyard.
            </p>
            <img
              src={agbo}
              alt="Bowl of local agbo herbal drinks in used plastic bottles"
              width={1024}
              height={575}
              loading="lazy"
              className="mt-3 w-full rounded-md border-2 border-primary object-cover"
            />
          </div>

          <div className="rounded-md border border-gold bg-card p-3">
            <h2 className="rounded-full border border-gold bg-cream px-6 py-3 text-center font-display text-2xl font-extrabold text-primary">
              How To Use RAVELLA
            </h2>
            <ul className="mt-3 space-y-2">
              {steps.map(([s, d]) => (
                <li key={s} className="flex gap-3 border-b border-border pb-2">
                  <span
                    aria-hidden
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-cream text-xs text-primary"
                  >
                    ✔
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-primary">{s}</p>
                    <p className="text-xs text-foreground/75">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3 space-y-2">
              <div className="rounded border border-border p-3">
                <p className="font-display text-sm font-bold text-primary">Bottle note</p>
                <p className="text-xs text-foreground/75">
                  At 60ml per day, a 750ml bottle provides approximately 12-13 days of use.
                </p>
              </div>
              <div className="rounded border border-border p-3">
                <p className="font-display text-sm font-bold text-primary">Safety:</p>
                <p className="text-xs text-foreground/75">
                  Always read the product label and follow the manufacturer's approved directions.
                  If you use prescription medicines or have a medical condition, seek professional
                  advice before use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonyBlock heading="Real Testimonies From Our Satisfied Users" items={testimonials3} />

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-center font-display text-3xl font-black text-alert sm:text-4xl">
          FAQ - Frequently asked Questions
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map(([q, a], i) => (
            <div key={q} className="overflow-hidden rounded-md border border-primary">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 bg-[oklch(0.24_0.06_145)] px-5 py-4 text-left font-display text-base font-semibold text-primary-foreground"
              >
                {q}
                <span aria-hidden>{open === i ? "⌃" : "⌄"}</span>
              </button>
              {open === i && (
                <p className="whitespace-pre-line bg-card px-5 py-4 text-sm text-foreground/80">
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="rounded-md bg-cream px-6 py-5 text-center font-display text-4xl font-black text-gold">
          Start Your Wellness Routine Today.
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.qty}
              className={`grid grid-cols-2 overflow-hidden rounded-lg border ${p.rec ? "border-gold" : "border-border"
                } bg-card`}
            >
              <div className="bg-[oklch(0.96_0.04_110)] p-4">
                <span className="inline-block rounded-full bg-primary px-3 py-1 font-display text-[11px] font-bold text-primary-foreground">
                  {p.qty}
                </span>
                <p className="mt-2 font-display text-lg font-extrabold text-primary">RAVELLA</p>
                <p className="mt-4 text-xs text-foreground/70">{p.ml}</p>
                <p className="font-display text-xs font-bold uppercase text-primary">
                  Total Wellness Formula
                </p>
                <span className="mt-3 inline-block rounded-full border border-alert px-3 py-0.5 text-[11px] font-bold text-alert">
                  FREE DELIVERY
                </span>
                <p className="mt-2 font-display text-xl font-black text-primary">{p.price}</p>
                <p className="font-display text-base font-bold text-alert line-through">{p.old}</p>
                {p.rec && (
                  <span className="mt-2 inline-block bg-gold px-2 py-0.5 font-display text-[11px] font-extrabold text-gold-foreground">
                    RECOMMENDED
                  </span>
                )}
              </div>
              <div className="flex flex-col items-center justify-between p-4">
                <img
                  src={bottles}
                  alt={`${p.qty} of Ravella Ultra Solution Organic Wine`}
                  width={400}
                  height={360}
                  loading="lazy"
                  className="w-full"
                />
                <a
                  href={FORM}
                  className="mt-3 rounded bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:brightness-125"
                >
                  Order Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <TestimonyBlock
        heading="More Testimonies From Our Community"
        items={testimonials2}
      />

      <TestimonyBlock
        heading="Another Real Testimonies From Our Satisfied Users"
        items={testimonials1}
      />

      {/* Warning */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-md border-2 border-dashed border-alert p-8 text-center">
        
          <p aria-hidden className="mt-3 text-2xl text-alert">
            📣
          </p>
          <h2 className="mt-2 font-display text-3xl font-black text-alert">WARNING !</h2>
          <div className="mx-auto mt-3 h-1 w-72 bg-gradient-to-r from-[oklch(0.5_0.15_250)] to-primary" />
          <div className="mt-4 space-y-4 text-sm font-semibold text-alert">
            <p>⚠ READY TO PLACE YOUR ORDER?</p>
            <p>Please proceed only if you are ready to receive your order within 1–3 business days.</p>
            <p>
              Payment is made immediately after submitting the form.
              <br />
              This is NOT Pay on Delivery.
            </p>
            <p>🚚 We deliver across Nigeria &amp; South Africa.</p>
            <p>
              Please enter your correct details and ensure you'll be available to receive your
              package.
            </p>
            <p>
              💬 Need help before ordering?
              <br />
              Chat with us on WhatsApp:{" "}
              <a href={WHATSAPP} className="underline">
                +234 915 027 7694
              </a>
            </p>
            <p>👉 Fill the form below to place your order.</p>
          </div>
        </div>
      </section>

      {/* Order */}
      <section id="order-form" className="bg-gold py-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="rounded-md bg-[oklch(0.98_0.01_300)] px-6 py-6">
            <h2 className="text-center font-display text-2xl font-black uppercase text-alert sm:text-3xl">
              Don't wait for stroke. Don't wait for kidney failure. Don't wait for a hospital
              emergency.
            </h2>
            <p aria-hidden className="mt-3 text-center text-3xl text-primary">
              ⬇
            </p>
          </div>

          <div className="mt-8 bg-card py-6">
            <img
              src={guarantee}
              alt="100% satisfaction guarantee stamp"
              width={300}
              height={300}
              loading="lazy"
              className="mx-auto w-32"
            />
          </div>
          <p className="border border-foreground bg-card px-4 py-3 text-center font-display text-lg font-extrabold uppercase text-primary">
            Note: <span className="text-alert">Enjoy free delivery today!!!</span> 100% satisfaction
            guarantee or your money back
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-lg bg-card p-6 shadow-soft">
            <form
              className="grid gap-4 sm:grid-cols-2"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);

                try {
                  const res = await fetch(FORMSPREE_ENDPOINT, {
                    method: "POST",
                    body: data,
                    headers: { Accept: "application/json" },
                  });

                  if (!res.ok) throw new Error("submit failed");

                  setSubmitted(true);

                  const pkg = plans[Number(data.get("package")) - 1];
                  const message = encodeURIComponent(
                    `New Ravella Order\n\nName: ${data.get("firstName")} ${data.get("lastName")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nAddress: ${data.get("address")}\nPackage: ${pkg?.qty ?? ""} - ${pkg?.price ?? ""}`
                  );
                  window.open(`https://wa.me/${LEAD_WHATSAPP_NUMBER}?text=${message}`, "_blank");

                  form.reset();
                } catch {
                  alert("Something went wrong sending your order. Please try again, or message us directly on WhatsApp.");
                }
              }}
            >
              <Field label="First Name" name="firstName" placeholder="First Name" />
              <Field label="Last Name" name="lastName" placeholder="Last Name" />
              <div className="sm:col-span-2">
                <Field label="Email Address" name="email" type="email" placeholder="email" />
              </div>
              <div className="sm:col-span-2">
                <Field label="Phone Number" name="phone" type="tel" placeholder="phone number" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="address" className="mb-1 block text-sm text-foreground/80">
                  Delivery Address <span className="text-alert">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={2}
                  placeholder="House number, street, landmark, city and state"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="pkg" className="mb-1 block text-sm text-foreground/80">
                  Choose Your Ravella Package
                </label>
                <select
                  id="pkg"
                  name="package"
                  required
                  defaultValue=""
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring"
                >
                  <option value="" disabled>
                    Select Choose Your Ravella Package
                  </option>
                  {plans.map((p, i) => (
                    <option key={p.qty} value={i + 1}>
                      {p.qty} - {p.price}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="sm:col-span-2 rounded-md bg-primary px-6 py-3 font-display text-sm font-bold text-gold transition hover:brightness-125"
              >
                Place Order
              </button>

              <a href={WHATSAPP}
                className="sm:col-span-2 flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-md transition hover:brightness-95"
              >
                💬 Chat with us on WhatsApp
              </a>
            </form>
            {submitted && (
              <p className="mt-4 rounded-md bg-accent px-4 py-3 text-center text-sm text-accent-foreground">
                Thank you! Our team will contact you on WhatsApp to confirm payment and delivery.
              </p>
            )}
          </div>
          <div className="mt-8 bg-card py-6">
            <img
              src={nafdac}
              alt="NAFDAC approved badge"
              width={300}
              height={300}
              loading="lazy"
              className="mx-auto w-32"
            />
          </div>
        </div>
      </section>

      <footer className="bg-deep py-8 text-center text-sm text-primary-foreground/80">
        <p className="font-display text-lg font-bold text-primary-foreground">
          Ravella Ultra Solution Organic Wine
        </p>
        <p className="mt-2">
          WhatsApp:{" "}
          <a href={WHATSAPP} className="underline hover:text-primary-foreground">
            +234 915 027 7694
          </a>{" "}
          · Nationwide delivery
        </p>
      </footer>

      <a
        href={WHATSAPP}
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-lg bg-leaf px-4 py-3 text-xl text-primary-foreground shadow-soft"
      >
        💬
      </a>
    </main >
  );
}
