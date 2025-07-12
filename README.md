# 🤝 MeetAccess (MVP)

As someone who is hard of hearing, I’ve experienced firsthand the challenges Deaf and HOH (Hard of Hearing) individuals face when it comes to communication—especially in job interviews, meetings, or everyday conversations. There’s a real need for tools that break down these barriers and create more inclusive environments.

**MeetAccess** is my attempt to help fill that gap.

---

## Project Vision

The goal of MeetAccess is to build software that can detect and translate American Sign Language (ASL) using a standard webcam. While the ultimate ambition is bold, the journey begins with small, meaningful steps.

### Roadmap

1. **ASL Alphabet Detection (Current MVP Goal)**

   - Detect static hand signs representing letters A–Z.
   - Show the recognized letter on screen in real time.
   - Provide a clean, accessible UI to make testing and learning easy.

2. **Word Formation**

   - Combine letter detection into full word predictions using a buffer or timed input.
   - Explore adding autocorrect-style logic for known ASL vocabulary.

3. **Signed Exact English (SEE)**

   - Expand the system to recognize full ASL signs that follow English grammar.
   - Support clearer translation for HOH users who rely on SEE-style signing.

4. **ASL Sentence Structure**
   - Work toward translating native ASL grammar into spoken/written English.
   - Consider incorporating NLP models to interpret meaning, not just signs.

This isn’t just a coding project—it’s a mission to make communication more accessible.

---

## Tech Stack

| Tech                | Purpose                           |
| ------------------- | --------------------------------- |
| **Vite**            | Fast development and build tool   |
| **React**           | Modular UI framework              |
| **React Router**    | Client-side routing               |
| **Bootstrap**       | UI layout and responsive styling  |
| **SCSS**            | Custom styling + design tokens    |
| **MediaPipe Hands** | Real-time hand pose detection     |
| **React Webcam**    | Access and render live video feed |

---
