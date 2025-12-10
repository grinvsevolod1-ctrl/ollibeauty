export async function sendToTelegram(data: {
  name: string
  phone: string
  service?: string
  date?: string
  message?: string
  formType: string
}) {
  try {
    const response = await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    return result
  } catch (error) {
    console.error("[v0] Error sending to Telegram:", error)
    return { success: false, error: "Network error" }
  }
}