import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function FAQsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[300px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
            alt="Frequently Asked Questions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm">Help Center</Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Frequently Asked <span className="text-emerald-300">Questions</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
            Find answers to common questions about our banking services and features.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input type="search" placeholder="Search for answers..." className="pl-10" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="general" className="mx-auto max-w-3xl">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
              <TabsTrigger value="online">Online Banking</TabsTrigger>
              <TabsTrigger value="loans">Loans</TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                {generalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="accounts" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                {accountFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="online" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                {onlineBankingFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="loans" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                {loanFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="cards" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                {cardFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Still Have Questions?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Our customer support team is here to help you with any questions or concerns you may have.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/">
              <Button className="bg-white text-emerald-700 border border-emerald-700">Contact Us</Button>
            </Link>
            <Button className="bg-white text-emerald-700 border border-emerald-700">Live Chat</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const generalFaqs = [
  {
    question: "What are Nexivelo's banking hours?",
    answer:
      "Our branch locations are typically open Monday through Friday from 9:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM. Hours may vary by location, so we recommend checking your local branch's hours on our website or mobile app. Our online and mobile banking services are available 24/7 for your convenience.",
  },
  {
    question: "How do I report a lost or stolen card?",
    answer:
      "If your card is lost or stolen, please call our 24/7 customer service line immediately at 1-800-555-0123 to report it and request a replacement. You can also temporarily lock your card through our mobile app or online banking platform until you locate it.",
  },
  {
    question: "Is my money insured at Nexivelo?",
    answer:
      "Yes, deposits at Nexivelo are insured by the Federal Deposit Insurance Corporation (FDIC) up to $250,000 per depositor, per insured bank, for each account ownership category. This means your money is protected up to these limits in the unlikely event of bank failure.",
  },
  {
    question: "How can I set up direct deposit?",
    answer:
      "To set up direct deposit, you'll need to provide your employer or payment source with your Nexivelo account number and our routing number. You can find this information on your checks, through online banking, or by contacting customer service. We also offer a direct deposit form that you can download from our website and provide to your employer.",
  },
  {
    question: "What is Nexivelo's routing number?",
    answer:
      "Nexivelo's routing number is 123456789. This number is used for direct deposits, wire transfers, and other electronic transactions. You can find this number on your checks, through online banking, or by contacting customer service.",
  },
]

const accountFaqs = [
  {
    question: "How do I open a new account?",
    answer:
      "You can open a new account online through our website, through our mobile app, or by visiting any of our branch locations. You'll need to provide identification, such as a driver's license or passport, your Social Security number, and an initial deposit (amount varies by account type).",
  },
  {
    question: "What types of accounts does Nexivelo offer?",
    answer:
      "Nexivelo offers a variety of accounts to meet your financial needs, including checking accounts, savings accounts, money market accounts, certificates of deposit (CDs), and retirement accounts (IRAs). Each account type has different features, benefits, and requirements. Visit our website or speak with a banker to find the right account for you.",
  },
  {
    question: "Are there monthly fees for checking accounts?",
    answer:
      "Some of our checking accounts have monthly maintenance fees, while others do not. For accounts with fees, there are typically ways to waive them, such as maintaining a minimum balance or setting up direct deposit. Our Essential Checking account has no monthly fee regardless of balance.",
  },
  {
    question: "How do I close my account?",
    answer:
      "To close your account, you can visit any branch location with valid identification, call our customer service, or send a secure message through online banking. Before closing, ensure all pending transactions have cleared and update any automatic payments or deposits linked to the account.",
  },
  {
    question: "What is the minimum balance required for a savings account?",
    answer:
      "Our Standard Savings account requires a minimum opening deposit of $25 and a minimum daily balance of $100 to avoid the monthly maintenance fee. Our High-Yield Savings account requires a minimum opening deposit of $500 and a minimum daily balance of $1,000 to avoid the monthly maintenance fee.",
  },
]

const onlineBankingFaqs = [
  {
    question: "How do I enroll in online banking?",
    answer:
      "To enroll in online banking, visit our website and click on the 'Enroll Now' button in the online banking section. You'll need your account number, Social Security number, and personal information to verify your identity. Once enrolled, you'll create a username and password for future logins.",
  },
  {
    question: "Is online banking secure?",
    answer:
      "Yes, we use industry-leading security measures to protect your information, including encryption, multi-factor authentication, and continuous monitoring for suspicious activity. We also offer security features like account alerts and the ability to set spending limits on your cards.",
  },
  {
    question: "What can I do through online banking?",
    answer:
      "Through online banking, you can view account balances and transactions, transfer funds between accounts, pay bills, deposit checks remotely, set up alerts, manage your cards, apply for loans, and more. Our mobile app offers the same features with the convenience of banking on the go.",
  },
  {
    question: "How do I reset my online banking password?",
    answer:
      "If you've forgotten your password, click on the 'Forgot Password' link on the login page. You'll need to verify your identity through security questions or a verification code sent to your email or phone. Once verified, you can create a new password.",
  },
  {
    question: "Is there a fee for using online or mobile banking?",
    answer:
      "No, online and mobile banking are free services for all Nexivelo customers. There are no fees for viewing accounts, transferring funds between Nexivelo accounts, or paying bills to most payees through our bill pay service.",
  },
]

const loanFaqs = [
  {
    question: "What types of loans does Nexivelo offer?",
    answer:
      "Nexivelo offers a variety of loan products, including mortgage loans, home equity loans and lines of credit, auto loans, personal loans, student loans, and business loans. Each loan type has different terms, rates, and requirements based on your needs and financial situation.",
  },
  {
    question: "How do I apply for a loan?",
    answer:
      "You can apply for a loan online through our website, through our mobile app, or by visiting any branch location. The application process typically requires information about your income, employment, assets, and debts. For mortgage loans, additional documentation may be required.",
  },
  {
    question: "What factors affect my loan approval and interest rate?",
    answer:
      "Several factors influence loan approval and interest rates, including your credit score, income, employment history, debt-to-income ratio, loan amount, loan term, and the value of any collateral. Having a higher credit score and lower debt-to-income ratio typically results in more favorable loan terms.",
  },
  {
    question: "How long does the loan approval process take?",
    answer:
      "The approval timeline varies by loan type. Personal loans and auto loans may be approved within hours or days, while mortgage loans typically take 30-45 days from application to closing. Pre-approval is available for many loan types to give you an estimate of how much you can borrow before you start shopping.",
  },
  {
    question: "Can I pay off my loan early?",
    answer:
      "Yes, you can pay off most loans early without penalty. We offer various repayment options, including making extra payments, setting up automatic payments, or paying a lump sum. Some loans, particularly certain mortgage products, may have prepayment penalties, so check your loan agreement or speak with a loan officer for details.",
  },
]

const cardFaqs = [
  {
    question: "How do I apply for a credit card?",
    answer:
      "You can apply for a credit card online through our website, through our mobile app, or by visiting any branch location. The application process typically requires information about your income, employment, and credit history. You'll usually receive a decision within minutes when applying online.",
  },
  {
    question: "How do I activate my new credit or debit card?",
    answer:
      "You can activate your new card by calling the number on the sticker attached to the card, through online banking, through our mobile app, or by making a purchase with your PIN. For security reasons, be sure to sign the back of your card immediately after activation.",
  },
  {
    question: "What should I do if I notice unauthorized transactions on my account?",
    answer:
      "If you notice unauthorized transactions, contact us immediately at 1-800-555-0123. For credit cards, your liability for unauthorized charges is limited to $50 under federal law. For debit cards, your liability may depend on how quickly you report the unauthorized transactions.",
  },
  {
    question: "How do I earn and redeem rewards on my credit card?",
    answer:
      "With our rewards credit cards, you earn points or cash back on purchases based on the specific card program. Points can typically be redeemed for travel, merchandise, gift cards, or statement credits through our online banking portal or mobile app. Some cards offer automatic redemption options.",
  },
  {
    question: "Can I use my Nexivelo card internationally?",
    answer:
      "Yes, Nexivelo credit and debit cards can be used internationally wherever Visa or Mastercard is accepted. For security purposes, we recommend notifying us of your travel plans before departing. Some cards may have foreign transaction fees, so check your card agreement or speak with a banker for details.",
  },
]

