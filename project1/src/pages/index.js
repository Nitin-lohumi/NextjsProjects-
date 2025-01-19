import { useMotionValue } from 'framer-motion';
import React,{useState} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>

      <AnimatePresence exitBeforeEnter>
        {isVisible && (
          <motion.div
            key="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            This box fades in and out!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
