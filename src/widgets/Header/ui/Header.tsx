import { HeaderButton } from './Button';
import { Logo } from './Logo';

export const Header = () => (
  <header className='flex justify-between pt-[20px] px-[120px]'>
    <Logo />
    <HeaderButton />
  </header>
);
