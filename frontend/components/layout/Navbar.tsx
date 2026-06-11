"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    setIsAuthenticated(!!token);

    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setUserName(parsedUser.name || "Cliente");
      } catch {
        setUserName("Cliente");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`
        transition-all duration-300
        hover:text-purple-200
        ${
          pathname === href
            ? "text-white font-bold border-b-2 border-white pb-1"
            : "text-white"
        }
      `}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-purple-950/90 border-b border-purple-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="OrionBank"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="text-2xl font-extrabold text-white">
              OrionBank
            </h1>

            <p className="text-[10px] tracking-[0.25em] text-purple-200">
              SEU FUTURO FINANCEIRO, AGORA.
            </p>
          </div>
        </Link>

        {/* Navegação */}
        {isAuthenticated && (
          <nav className="flex items-center gap-8">
            {navLink("/dashboard", "Dashboard")}
            {navLink("/transfers", "Transferências")}
            {navLink("/investments", "Investimentos")}
            {navLink("/profile", "Perfil")}
          </nav>
        )}

        {/* Área do usuário */}
        <div className="flex items-center gap-4">

          {!isAuthenticated ? (
            <>
              <Link
                href="/login"
                className="
                  border border-white
                  text-white
                  px-5 py-2
                  rounded-xl
                  font-medium
                  hover:bg-white
                  hover:text-purple-900
                  transition-all duration-300
                "
              >
                Entrar
              </Link>

              <Link
                href="/register"
                className="
                  bg-white
                  text-purple-900
                  px-5 py-2
                  rounded-xl
                  font-semibold
                  hover:scale-105
                  transition-all duration-300
                "
              >
                Abrir Conta
              </Link>
            </>
          ) : (
            <>
              <div className="text-right">
                <p className="text-xs text-purple-200">
                  Bem-vindo
                </p>

                <p className="font-semibold text-white">
                  {userName}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  px-4 py-2
                  rounded-xl
                  transition-all duration-300
                "
              >
                Sair
              </button>
            </>
          )}

        </div>
      </div>
    </header>
  );
}