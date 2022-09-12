import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '@/App';
import { Index as AboutUs } from '@/routes/aboutus';
import { Index as Blog } from '@/routes/blog';
import { Index as Board } from '@/routes/board';
import { Index as Counter } from '@/routes/counter';
import { Index as Home } from '@/routes/home';
import { Index as NotFound } from '@/routes/notfound';
import { Index as Signin } from '@/routes/signin';
import { Index as Signup } from '@/routes/signup';

export default function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/:id" element={<Board />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
