import * as Icons from "lucide-react";

const Lucide = Icons && Icons.default ? Icons.default : Icons;

export default function ButtonAnimate({
  href = "/explore",
  variant = "primary",
  children = "Explore More",
}) {
  return (
    <>
      <a href={href} className={`anim-btn btn anim-btn--${variant}`}>
        <span className="button-content-wrapper">
          <span className="button-text">{children}</span>

          <span className="button-icon">
            {Lucide?.ArrowRight && (
              <Lucide.ArrowRight className="h-5 w-5" aria-hidden />
            )}
          </span>
        </span>
      </a>

      <style>
        {`
          /* ===== Base Button ===== */
          .btn {
            font-weight: 600;
            border-radius: 0.5rem;
            padding: 1rem 1.5rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          /* ===== Animation Layer ===== */
          .anim-btn::before {
            content: "";
            position: absolute;
            inset: 0;
            background: var(--hover-bg);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.5s ease;
            z-index: 0;
          }

          .anim-btn:hover::before {
            transform: scaleX(1);
            transform-origin: left;
          }

          .button-content-wrapper {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }

          /* ===== Variants ===== */

          .anim-btn--primary {
            background: #2563eb;
            color: #ffffff;
            --hover-bg: #020617;
          }

          .anim-btn--secondary {
            background: #16a34a;
            color: #ffffff;
            --hover-bg: #052e16;
          }

          /* ===== Motion Safety ===== */
          @media (prefers-reduced-motion: reduce) {
            .anim-btn::before {
              transition: none;
            }
          }
        `}
      </style>
    </>
  );
}
