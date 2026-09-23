export type Lang = "en" | "vi";

export const content = {
  nav: {
    en: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    vi: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      experience: "Kinh nghiệm",
      education: "Học vấn",
      contact: "Liên hệ",
    },
  },
  hero: {
    en: {
      greeting: "Hi, I'm",
      name: "Phạm Tuấn Minh",
      roles: [
        "Full-Stack Developer",
        "Vue / Nuxt.js Developer",
        "React / Next.js Developer",
        "Python / TailorNet / SMPL Developer",
      ],
      description:
        "Passionate Full-Stack Developer with hands-on experience building real-world web applications. I specialize in modern frontend development and AI-powered features.",
      cta_projects: "View Projects",
      cta_contact: "Contact Me",
      cta_cv: "Download CV",
    },
    vi: {
      greeting: "Xin chào, tôi là",
      name: "Phạm Tuấn Minh",
      roles: [
        "Lập trình viên Full-Stack",
        "Sở trường là Vue / Nuxt.js",
        "Lập trình React / Next.js",
        "Lập trình Python / TailorNet / SMPL",
      ],
      description:
        "Lập trình viên Full-Stack với kinh nghiệm thực chiến xây dựng ứng dụng web thực tế. Chuyên về phát triển frontend hiện đại và tích hợp các tính năng AI.",
      cta_projects: "Xem dự án",
      cta_contact: "Liên hệ",
      cta_cv: "Tải CV",
    },
  },
  about: {
    en: {
      title: "About Me",
      subtitle: "Get to know me",
      bio: "I'm a Full-Stack Developer and a recent graduate from Ho Chi Minh City University of Technology and Education (HCMUTE), majoring in Information Technology / Information Systems.",
      bio2:
        "During my studies, I completed an internship at Maysoft Company where I was the sole frontend developer for the Petpet.vn e-commerce platform. For my graduation thesis, I independently designed and built a full-stack fashion e-commerce website with an AI-powered 3D virtual fitting room using TailorNet and SMPL models.",
      bio3:
        "I use AI coding agents (GitHub Copilot, Claude, Cursor) in my daily workflow. I also have some knowledge of Selenium and Playwright for performance testing on websites I've built.",
      info: [
        { label: "Name", value: "Phạm Tuấn Minh" },
        { label: "Date of Birth", value: "19 May 2003" },
        { label: "Email", value: "phamtuanminh19052003@gmail.com" },
        { label: "Phone", value: "0773-772-174" },
        { label: "LinkedIn", value: "linkedin.com/in/ptm1905" },
        { label: "GitHub", value: "github.com/TuanMinh1905" },
      ],
    },
    vi: {
      title: "Giới thiệu",
      subtitle: "Tìm hiểu về tôi",
      bio: "Tôi là Lập trình viên Full-Stack, tốt nghiệp từ Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE), chuyên ngành Công nghệ thông tin / Hệ thống thông tin.",
      bio2:
        "Trong quá trình học tập, tôi thực tập tại Công ty Maysoft với vai trò là lập trình viên frontend duy nhất cho nền tảng thương mại điện tử Petpet.vn. Với đề tài tốt nghiệp, tôi độc lập thiết kế và xây dựng một website thương mại điện tử thời trang full-stack với phòng thử đồ ảo 3D ứng dụng AI sử dụng mô hình TailorNet và SMPL.",
      bio3:
        "Tôi biết sử dụng các AI coding agents (GitHub Copilot, Claude, Cursor) trong công việc hàng ngày. Tôi có biết một chút về Selenium và Playwright để phục vụ cho việc kiểm thử hiệu năng ở các trang web mà tôi từng xây dựng.",
      info: [
        { label: "Họ và tên", value: "Phạm Tuấn Minh" },
        { label: "Ngày sinh", value: "19/05/2003" },
        { label: "Email", value: "phamtuanminh19052003@gmail.com" },
        { label: "Điện thoại", value: "0773-772-174" },
        { label: "LinkedIn", value: "linkedin.com/in/ptm1905" },
        { label: "GitHub", value: "github.com/TuanMinh1905" },
      ],
    },
  },
  skills: {
    en: {
      title: "Skills",
      subtitle: "Technologies I work with",
      featured_note: "Most proficient",
      groups: [
        {
          name: "Frontend",
          icon: "🎨",
          skills: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Web Components"],
          featured: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
        },
        {
          name: "Backend & Database",
          icon: "⚙️",
          skills: ["Node.js", "Django", "MongoDB", "SQL Server", "Oracle", "Prisma ORM", "REST API"],
        },
        {
          name: "State Management",
          icon: "🔄",
          skills: ["Pinia", "Zustand", "Redux (concepts)"],
          featured: ["Pinia"],
        },
        {
          name: "Tools & Workflow",
          icon: "🛠️",
          skills: ["Git / GitHub", "Figma", "Principle", "Selenium", "Playwright"],
        },
        {
          name: "AI & Others",
          icon: "🤖",
          skills: ["TailorNet", "SMPL", "Python", "GitHub Copilot", "Claude", "Cursor", "Spark", "Hadoop"],
        },
      ],
    },
    vi: {
      title: "Kỹ năng",
      subtitle: "Công nghệ tôi sử dụng",
      featured_note: "Nắm vững nhất",
      groups: [
        {
          name: "Frontend",
          icon: "🎨",
          skills: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Web Components"],
          featured: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
        },
        {
          name: "Backend & cơ sở dữ liệu",
          icon: "⚙️",
          skills: ["Node.js", "Django", "MongoDB", "SQL Server", "Oracle", "Prisma ORM", "REST API"],
        },
        {
          name: "Quản lý state",
          icon: "🔄",
          skills: ["Pinia", "Zustand", "Redux (concepts)"],
          featured: ["Pinia"],
        },
        {
          name: "Công cụ & quy trình",
          icon: "🛠️",
          skills: ["Git / GitHub", "Figma", "Principle", "Selenium", "Playwright"],
        },
        {
          name: "AI & khác",
          icon: "🤖",
          skills: ["TailorNet", "SMPL", "Python", "GitHub Copilot", "Claude", "Cursor", "Spark", "Hadoop"],
        },
      ],
    },
  },
  projects: {
    en: {
      title: "Projects",
      subtitle: "Things I've built",
      badge_real: "Real-world Project",
      badge_thesis: "Graduation Thesis",
      badge_solo: "Solo Developer",
      badge_intern: "Internship",
      view_github: "GitHub",
      view_live: "Live Site",
      view_demo: "Demo Video",
      items: [
        {
          id: "petpet",
          title: "Petpet.vn",
          subtitle: "E-commerce Platform – Maysoft Company",
          period: "07/2025 – 12/2025",
          badges: ["Real-world Project", "Internship"],
          image: "/petpet.jpg",
          description:
            "The official e-commerce website for Petpet, a pet products brand. I was the sole frontend developer responsible for building the entire client-facing interface from the ground up.",
          highlights: [
            "Built a landing page for product browsing, news updates, and promotions following Mobile-First design principles",
            "Developed with Nuxt.js as the main framework and Pinia for scalable state management",
            "Integrated REST APIs and performed data operations with MongoDB",
            "Split page rendering between SSR and CSR to optimize performance and user experience; applied SEO best practices to improve search visibility — deepened understanding of rendering strategies in modern web apps",
            "Persisted user shopping history in LocalStorage via a custom Nuxt.js Plugin and Middleware, so previously viewed products are restored on next visit — strengthened understanding of Nuxt.js architecture, Plugin and Middleware lifecycle",
            "Implemented Virtual Scroll Masonry layout on Mobile Web so products load progressively as the user scrolls, preventing heavy upfront rendering",
          ],
          featuredHighlights: [3, 4, 5],
          tech: ["Nuxt.js", "Vue.js", "Pinia", "MongoDB", "REST API", "Tailwind CSS", "SSR/CSR", "SEO"],
          links: {
            live: "https://petpet.vn/",
          },
        },
        {
          id: "fitting-room",
          title: "AI Virtual Fitting Room",
          subtitle: "TMF Fashion – Graduation Thesis",
          period: "02/2026 – 07/2026",
          badges: ["Graduation Thesis", "Solo Developer"],
          image: "/FittingRoom.jpg",
          description:
            "A full-stack fashion e-commerce platform with an AI-powered 3D virtual fitting room. The core innovation is the integration of TailorNet and SMPL AI models to reconstruct a 3D human body from a 2D image and simulate how garments fit on it.",
          highlights: [
            "Used Next.js, HonoJS, MongoDB and Zustand to design and develop a full-stack fashion e-commerce website with all core features. The main highlight of this project is the AI-powered virtual fitting room",
            "Used the SMPL model to extract mesh data for 3D human body reconstruction, then integrated Three.js with Next.js to render the fitting room and smoothly adjust parameters such as height, weight, and body shape",
            "Used TailorNet to render garments on top of the SMPL body mesh — deepened understanding of TailorNet and SMPL datasets, enabling custom training of shirt, long pants, and shorts data to expand the fitting room\'s wardrobe variety",
          ],
          featuredHighlights: [2],
          tech: ["Next.js", "HonoJS", "MongoDB", "Zustand", "Three.js", "TailorNet", "SMPL", "Python"],
          links: {
            github: "https://github.com/TuanMinh1905/Fittingroom-Official",
            demo: "https://drive.google.com/file/d/1i4diSXaiE48r_edPh_6n0nJzjKH5ry0L/view",
          },
        },
      ],
    },
    vi: {
      title: "Dự án",
      subtitle: "Những gì tôi đã xây dựng",
      badge_real: "Dự án thực tế",
      badge_thesis: "Khóa luận tốt nghiệp",
      badge_solo: "Solo Developer",
      badge_intern: "Thực tập",
      view_github: "GitHub",
      view_live: "Trang web",
      view_demo: "Video demo",
      items: [
        {
          id: "petpet",
          title: "Petpet.vn",
          subtitle: "Nền tảng thương mại điện tử – Công ty Maysoft",
          period: "07/2025 – 12/2025",
          badges: ["Dự án thực tế", "Thực tập"],
          image: "/petpet.jpg",
          description:
            "Website thương mại điện tử chính thức của Petpet, thương hiệu sản phẩm thú cưng. Tôi là lập trình viên frontend duy nhất chịu trách nhiệm xây dựng toàn bộ giao diện phía client từ đầu.",
          highlights: [
            "Xây dựng landing page cho việc duyệt sản phẩm, cập nhật tin tức và khuyến mãi theo thiết kế Mobile-First",
            "Phát triển với Nuxt.js là framework chính và Pinia để quản lý state có khả năng mở rộng",
            "Tích hợp REST API và thực hiện các thao tác dữ liệu với MongoDB",
            "Phân chia render các page SSR/CSR sao cho tối ưu hiệu năng và trải nghiệm của người dùng. Tối ưu SEO tăng khả năng tìm kiếm → Qua đó hiểu rõ được SSR/CSR và các cách render một trang web",
            "Lưu trạng thái mua sắm của người dùng vào LocalStorage. Để khi người dùng truy cập vào lần sau, vẫn hiển thị những sản phẩm mà client đã từng xem → Qua đó hiểu rõ hơn về structure của NuxtJS, hiểu rõ hơn cách Plugin, Middleware hoạt động",
            "Ở giao diện Mobile Web phần render sản phẩm được thiết kế theo kiểu Virtual Scroll Masonry để người dùng lướt tới đâu load sản phẩm tới đó, tránh trang web render quá nặng",
          ],
          featuredHighlights: [3, 4, 5],
          tech: ["Nuxt.js", "Vue.js", "Pinia", "MongoDB", "REST API", "Tailwind CSS", "SSR/CSR", "SEO"],
          links: {
            live: "https://petpet.vn/",
          },
        },
        {
          id: "fitting-room",
          title: "Phòng thử đồ ảo AI",
          subtitle: "TMF Fashion – Khóa luận tốt nghiệp",
          period: "02/2026 – 07/2026",
          badges: ["Khóa luận tốt nghiệp", "Solo Developer"],
          image: "/FittingRoom.jpg",
          description:
            "Nền tảng thương mại điện tử thời trang full-stack với phòng thử đồ ảo 3D ứng dụng AI. Điểm cốt lõi là việc tích hợp mô hình AI TailorNet và SMPL để tái tạo cơ thể người 3D từ ảnh 2D và mô phỏng cách quần áo vừa vặn.",
          highlights: [
            "Sử dụng NextJS, HonoJS, MongoDB và Zustand để thiết kế và phát triển website thương mại điện tử full-stack đầy đủ các chức năng cơ bản. Điểm nhấn chính ở project này là phòng thử đồ ảo AI",
            "Sử dụng model SMPL để lấy ra data dựng lên hình người 3D và sử dụng ThreeJS để render nó lên trang Web",
            "Sử dụng model TailorNet để thực hiện vẽ áo dựa trên dữ liệu mà SMPL trả về -> Qua đó hiểu rõ được tập dữ liệu của TailorNet và SMPL. Nhờ đó có thể tự train ra tập data của áo sơ mi, quần dài, quần short để làm phòng thử đồ đa dạng hơn.",
          ],
          featuredHighlights: [2],
          tech: ["Next.js", "HonoJS", "MongoDB", "Zustand", "Three.js", "TailorNet", "SMPL", "Python"],
          links: {
            github: "https://github.com/TuanMinh1905/Fittingroom-Official",
            demo: "https://drive.google.com/file/d/1i4diSXaiE48r_edPh_6n0nJzjKH5ry0L/view",
          },
        },
      ],
    },
  },
  experience: {
    en: {
      title: "Work Experience",
      subtitle: "My professional journey",
      items: [
        {
          role: "Frontend Developer (Full-time Intern)",
          company: "Maysoft Company – Petpet.vn",
          period: "July 2025 – December 2025",
          type: "Internship",
          description: [
            "Developed the Petpet website for both Desktop and Mobile interfaces using a Mobile-First approach",
            "Built landing pages for product browsing and company news updates",
            "Used Nuxt.js as the main framework with Pinia for state management",
            "Integrated REST APIs and performed data operations with MongoDB",
            "Implemented SSR/CSR strategies and SEO optimization",
            "Managed source code and workflow using GitHub",
          ],
          tech: ["Nuxt.js", "Vue.js", "Pinia", "MongoDB", "REST API", "GitHub"],
        },
      ],
    },
    vi: {
      title: "Kinh nghiệm làm việc",
      subtitle: "Hành trình nghề nghiệp của tôi",
      items: [
        {
          role: "Lập trình viên Frontend (thực tập toàn thời gian)",
          company: "Công ty Maysoft – Petpet.vn",
          period: "Tháng 7/2025 – Tháng 12/2025",
          type: "Thực tập",
          description: [
            "Phát triển website Petpet cho cả giao diện Desktop và Mobile theo phương pháp Mobile-First",
            "Xây dựng landing page cho việc duyệt sản phẩm và cập nhật tin tức công ty",
            "Sử dụng Nuxt.js làm framework chính với Pinia để quản lý state",
            "Tích hợp REST API và thực hiện các thao tác dữ liệu với MongoDB",
            "Triển khai chiến lược SSR/CSR và tối ưu SEO",
            "Quản lý source code và quy trình làm việc bằng GitHub",
          ],
          tech: ["Nuxt.js", "Vue.js", "Pinia", "MongoDB", "REST API", "GitHub"],
        },
      ],
    },
  },
  education: {
    en: {
      title: "Education",
      subtitle: "Academic background",
      items: [
        {
          school: "Ho Chi Minh City University of Technology and Education",
          shortName: "HCMUTE",
          major: "Information Technology / Information Systems",
          period: "2021 – 2026",
          gpa: "7.46 / 10.00  (2.95 / 4.00)",
          degree: "Bachelor of Engineering",
        },
      ],
    },
    vi: {
      title: "Học vấn",
      subtitle: "Nền tảng học thuật",
      items: [
        {
          school: "Trường Đại học Sư phạm Kỹ thuật TP.HCM",
          shortName: "HCMUTE",
          major: "Công nghệ thông tin / Hệ thống thông tin",
          period: "2021 – 2026",
          gpa: "7.46 / 10.00  (2.95 / 4.00)",
          degree: "Kỹ sư",
        },
      ],
    },
  },
  contact: {
    en: {
      title: "Contact",
      subtitle: "Let's work together",
      description:
        "I'm currently open to new opportunities. Whether you have a question or just want to say hi — my inbox is always open!",
      email_label: "Send Email",
      links: [
        { label: "Email", value: "phamtuanminh19052003@gmail.com", href: "mailto:phamtuanminh19052003@gmail.com", icon: "email" },
        { label: "Phone", value: "0773-772-174", href: "tel:+84773772174", icon: "phone" },
        { label: "LinkedIn", value: "linkedin.com/in/ptm1905", href: "https://linkedin.com/in/ptm1905", icon: "linkedin" },
        { label: "GitHub", value: "github.com/TuanMinh1905", href: "https://github.com/TuanMinh1905", icon: "github" },
      ],
    },
    vi: {
      title: "Liên hệ",
      subtitle: "Hãy cùng làm việc",
      description:
        "Hiện tôi đang mở cửa cho các cơ hội mới. Dù bạn có câu hỏi hay chỉ muốn chào hỏi – hộp thư của tôi luôn mở!",
      email_label: "Gửi email",
      links: [
        { label: "Email", value: "phamtuanminh19052003@gmail.com", href: "mailto:phamtuanminh19052003@gmail.com", icon: "email" },
        { label: "Điện thoại", value: "0773-772-174", href: "tel:+84773772174", icon: "phone" },
        { label: "LinkedIn", value: "linkedin.com/in/ptm1905", href: "https://linkedin.com/in/ptm1905", icon: "linkedin" },
        { label: "GitHub", value: "github.com/TuanMinh1905", href: "https://github.com/TuanMinh1905", icon: "github" },
      ],
    },
  },
};
