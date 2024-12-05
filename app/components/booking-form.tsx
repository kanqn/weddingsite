"use client";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">ご予約・お問い合わせ</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="お名前" required />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="メールアドレス" required />
          </div>
          <div className="mb-4">
            <Input type="tel" placeholder="電話番号" required />
          </div>
          <div className="mb-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">{date ? date.toDateString() : '希望日を選択'}</Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="mb-4">
            <Textarea placeholder="メッセージ" />
          </div>
          <Button type="submit" className="w-full">送信</Button>
        </form>
      </div>
    </section>
  )
}

