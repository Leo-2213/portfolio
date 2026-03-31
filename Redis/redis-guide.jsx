import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Color palette
const colors = {
  primary: '#DC382D',      // Redis red
  secondary: '#1a1a2e',    // Deep navy
  tertiary: '#16213e',     // Dark blue
  accent1: '#00d4ff',      // Cyan
  accent2: '#ffd60a',      // Gold
  accent3: '#ff006e',      // Pink
  accent4: '#8338ec',      // Purple
  text: '#e0e0e0',
  textSecondary: '#a0a0a0',
  bg: '#0f0f1e',
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-opacity-80 backdrop-blur-md border-b border-opacity-20'
          : 'bg-opacity-0'
      }`}
      style={{
        backgroundColor: isScrolled ? colors.secondary : 'transparent',
        borderColor: colors.primary,
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white"
            style={{ backgroundColor: colors.primary }}
          >
            ⚡
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
            Redis Guide
          </span>
        </motion.div>

        <motion.div className="flex gap-6">
          {['Concepts', 'DataTypes', 'Persistence', 'Scaling', 'UseCases'].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              whileHover={{ color: colors.primary }}
              className="text-sm font-medium transition-colors"
              style={{ color: colors.textSecondary }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </nav>
    </motion.header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: colors.primary }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: colors.accent1 }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span style={{ color: colors.primary }}>Redis</span>
            <br />
            <span style={{ color: colors.text }}>
              In-Memory Excellence
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
          style={{ color: colors.textSecondary }}
        >
          Master the world's most beloved in-memory data structure store. From caching to real-time analytics, learn how Redis powers millions of applications.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-xl font-bold text-white text-lg"
          style={{ backgroundColor: colors.primary }}
        >
          Explore Redis →
        </motion.button>
      </div>
    </section>
  );
};

// Feature Tile Component
const FeatureTile = ({ icon, title, description, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group p-6 rounded-2xl overflow-hidden border border-opacity-20 backdrop-blur-xl"
      style={{
        backgroundColor: `${color}20`,
        borderColor: color,
      }}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3" style={{ color: colors.text }}>
          {title}
        </h3>
        <p style={{ color: colors.textSecondary }} className="leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

// Concepts Section
const ConceptsSection = () => {
  const concepts = [
    {
      icon: '⚡',
      title: 'In-Memory Database',
      description: 'All data is stored in RAM, providing microsecond latency for read/write operations. Orders of magnitude faster than disk-based databases.',
      color: colors.accent1,
    },
    {
      icon: '🎯',
      title: 'Multiple Data Formats',
      description: 'Supports Strings, Lists, Sets, Sorted Sets, Hashes, Streams, Bitmaps, and HyperLogLog. Perfect for diverse data structure needs.',
      color: colors.accent2,
    },
    {
      icon: '🔄',
      title: 'Primary Data Structure',
      description: 'Can serve as your primary database, not just a cache. Persistent storage options ensure data durability and recovery.',
      color: colors.accent3,
    },
    {
      icon: '🚀',
      title: 'Single-Threaded',
      description: 'Efficient single-threaded event loop model. No locks needed, atomic operations guaranteed. Simple but incredibly powerful.',
      color: colors.accent4,
    },
  ];

  return (
    <section id="Concepts" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4" style={{ color: colors.text }}>
            Core Concepts
          </h2>
          <p style={{ color: colors.textSecondary }} className="text-lg max-w-2xl mx-auto">
            Understand what makes Redis the go-to choice for high-performance applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {concepts.map((concept, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <FeatureTile {...concept} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Data Types Section
const DataTypesSection = () => {
  const dataTypes = [
    {
      name: 'Strings',
      icon: '📝',
      example: 'SET name "John" | GET name',
      useCase: 'Session data, counters, serialized objects',
      operations: 'GET, SET, INCR, APPEND, STRLEN',
    },
    {
      name: 'Lists',
      icon: '📋',
      example: 'LPUSH queue item | RPOP queue',
      useCase: 'Task queues, activity feeds, chat history',
      operations: 'LPUSH, RPUSH, LPOP, LRANGE, LLEN',
    },
    {
      name: 'Sets',
      icon: '🎲',
      example: 'SADD tags "redis" | SMEMBERS tags',
      useCase: 'Unique visitors, tags, relationships',
      operations: 'SADD, SMEMBERS, SINTER, SUNION, SCARD',
    },
    {
      name: 'Sorted Sets',
      icon: '📊',
      example: 'ZADD scores 100 player | ZRANGE scores 0 -1',
      useCase: 'Leaderboards, priority queues, rankings',
      operations: 'ZADD, ZRANGE, ZRANK, ZREVRANGE, ZSCORE',
    },
    {
      name: 'Hashes',
      icon: '🗂️',
      example: 'HSET user:1 name "John" age "30"',
      useCase: 'User objects, product details, caching objects',
      operations: 'HSET, HGET, HGETALL, HMGET, HDEL',
    },
    {
      name: 'Streams',
      icon: '🌊',
      example: 'XADD stream * field value',
      useCase: 'Event logs, message queues, time-series data',
      operations: 'XADD, XREAD, XRANGE, XLEN',
    },
  ];

  return (
    <section id="DataTypes" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4" style={{ color: colors.text }}>
            Data Types Mastery
          </h2>
          <p style={{ color: colors.textSecondary }} className="text-lg max-w-2xl mx-auto">
            Redis supports multiple data types, each optimized for specific use cases
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {dataTypes.map((dtype, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl border backdrop-blur-xl group cursor-pointer"
              style={{
                backgroundColor: `${colors.accent1}15`,
                borderColor: colors.accent1,
              }}
            >
              <div className="text-5xl mb-4">{dtype.icon}</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: colors.accent1 }}>
                {dtype.name}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: colors.accent2 }}>
                    Example:
                  </p>
                  <code
                    className="text-xs p-2 rounded block"
                    style={{
                      backgroundColor: `${colors.secondary}`,
                      color: colors.accent1,
                    }}
                  >
                    {dtype.example}
                  </code>
                </div>
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: colors.accent2 }}>
                    Use Cases:
                  </p>
                  <p style={{ color: colors.textSecondary }}>{dtype.useCase}</p>
                </div>
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: colors.accent2 }}>
                    Key Operations:
                  </p>
                  <p className="text-xs" style={{ color: colors.textSecondary }}>
                    {dtype.operations}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Caching Section
const CachingSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Why Cache */}
          <div>
            <h2 className="text-5xl font-black mb-6" style={{ color: colors.text }}>
              Why Redis for Caching?
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: '🚀 Lightning Speed',
                  desc: 'Sub-millisecond latency with in-memory access',
                },
                {
                  title: '💾 Efficient Memory',
                  desc: 'Optimized data structures with minimal overhead',
                },
                {
                  title: '🔄 Expiration Keys',
                  desc: 'Automatic data eviction with TTL (Time-To-Live)',
                },
                {
                  title: '📊 Flexible Policies',
                  desc: 'LRU, LFU, Random eviction strategies',
                },
                {
                  title: '⚡ Atomic Operations',
                  desc: 'Thread-safe operations without locks',
                },
                {
                  title: '🌐 Distributed',
                  desc: 'Replicate across nodes for fault tolerance',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-lg border border-opacity-20 backdrop-blur"
                  style={{
                    backgroundColor: `${colors.primary}15`,
                    borderColor: colors.primary,
                  }}
                >
                  <p className="font-bold mb-1">{item.title}</p>
                  <p style={{ color: colors.textSecondary }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Cache Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-96"
          >
            <svg viewBox="0 0 300 400" className="w-full h-full">
              {/* Application */}
              <rect
                x="50"
                y="20"
                width="200"
                height="60"
                fill={colors.secondary}
                stroke={colors.accent1}
                strokeWidth="2"
                rx="8"
              />
              <text
                x="150"
                y="55"
                textAnchor="middle"
                fill={colors.accent1}
                fontSize="16"
                fontWeight="bold"
              >
                Application
              </text>

              {/* Arrow down */}
              <line
                x1="150"
                y1="80"
                x2="150"
                y2="120"
                stroke={colors.primary}
                strokeWidth="2"
              />
              <polygon points="150,120 145,110 155,110" fill={colors.primary} />

              {/* Redis Cache */}
              <rect
                x="50"
                y="120"
                width="200"
                height="80"
                fill={colors.secondary}
                stroke={colors.primary}
                strokeWidth="2"
                rx="8"
              />
              <text
                x="150"
                y="155"
                textAnchor="middle"
                fill={colors.primary}
                fontSize="16"
                fontWeight="bold"
              >
                Redis Cache
              </text>
              <text
                x="150"
                y="180"
                textAnchor="middle"
                fill={colors.accent1}
                fontSize="12"
              >
                Fast | Expiring | Warm
              </text>

              {/* Arrow down */}
              <line
                x1="150"
                y1="200"
                x2="150"
                y2="240"
                stroke={colors.primary}
                strokeWidth="2"
              />
              <polygon points="150,240 145,230 155,230" fill={colors.primary} />

              {/* Database */}
              <rect
                x="50"
                y="240"
                width="200"
                height="80"
                fill={colors.secondary}
                stroke={colors.accent2}
                strokeWidth="2"
                rx="8"
              />
              <text
                x="150"
                y="275"
                textAnchor="middle"
                fill={colors.accent2}
                fontSize="16"
                fontWeight="bold"
              >
                Database
              </text>
              <text
                x="150"
                y="300"
                textAnchor="middle"
                fill={colors.accent1}
                fontSize="12"
              >
                Slow | Persistent | Source
              </text>

              {/* Side annotation */}
              <text
                x="280"
                y="110"
                fill={colors.textSecondary}
                fontSize="11"
              >
                Check Cache
              </text>
              <text
                x="280"
                y="220"
                fill={colors.textSecondary}
                fontSize="11"
              >
                Hit: Return
                <tspan x="280" dy="12">
                  Miss: Query DB
                </tspan>
              </text>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Persistence Section
const PersistenceSection = () => {
  const persistenceTypes = [
    {
      title: 'RDB (Redis Database)',
      icon: '💾',
      color: colors.accent1,
      points: [
        'Point-in-time snapshots of the entire dataset',
        'Compact binary format, fast loading',
        'BGSAVE creates snapshot in background',
        'Can be scheduled (e.g., every 5 minutes)',
        'Best for: Infrequent full backups',
      ],
    },
    {
      title: 'AOF (Append-Only File)',
      icon: '📝',
      color: colors.accent2,
      points: [
        'Logs every write operation as it happens',
        'Human-readable text format',
        'Can be rewritten to compress older data',
        'Multiple fsync policies: always/everysec/no',
        'Best for: Maximum durability, recovery',
      ],
    },
    {
      title: 'Hybrid Approach',
      icon: '🔀',
      color: colors.accent3,
      points: [
        'Combine RDB + AOF for optimal balance',
        'RDB for fast loading, AOF for durability',
        'RDB loads first, then AOF replays changes',
        'Minimal data loss with reasonable speed',
        'Best for: Production systems',
      ],
    },
  ];

  return (
    <section id="Persistence" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4" style={{ color: colors.text }}>
            Data Persistence
          </h2>
          <p style={{ color: colors.textSecondary }} className="text-lg max-w-2xl mx-auto">
            How Redis ensures data survives server restarts and crashes
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {persistenceTypes.map((ptype, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-8 rounded-2xl border backdrop-blur-xl"
              style={{
                backgroundColor: `${ptype.color}15`,
                borderColor: ptype.color,
              }}
            >
              <div className="text-4xl mb-4">{ptype.icon}</div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: ptype.color }}>
                {ptype.title}
              </h3>
              <ul className="space-y-3">
                {ptype.points.map((point, pidx) => (
                  <li key={pidx} className="flex gap-2 text-sm">
                    <span style={{ color: ptype.color }}>▸</span>
                    <span style={{ color: colors.textSecondary }}>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Persistence Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl border backdrop-blur-xl"
          style={{
            backgroundColor: `${colors.primary}10`,
            borderColor: colors.primary,
          }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
            Persistence Architecture
          </h3>
          <svg viewBox="0 0 1000 200" className="w-full h-auto">
            {/* In-Memory */}
            <rect
              x="20"
              y="80"
              width="120"
              height="80"
              fill={colors.secondary}
              stroke={colors.accent1}
              strokeWidth="2"
              rx="8"
            />
            <text
              x="80"
              y="125"
              textAnchor="middle"
              fill={colors.accent1}
              fontSize="14"
              fontWeight="bold"
            >
              In-Memory
            </text>

            {/* BGSAVE */}
            <path
              d="M 140 120 L 180 120"
              stroke={colors.primary}
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            <text
              x="160"
              y="110"
              textAnchor="middle"
              fill={colors.primary}
              fontSize="12"
            >
              BGSAVE
            </text>

            {/* RDB File */}
            <rect
              x="180"
              y="80"
              width="120"
              height="80"
              fill={colors.secondary}
              stroke={colors.accent2}
              strokeWidth="2"
              rx="8"
            />
            <text
              x="240"
              y="120"
              textAnchor="middle"
              fill={colors.accent2}
              fontSize="14"
              fontWeight="bold"
            >
              RDB File
            </text>
            <text
              x="240"
              y="140"
              textAnchor="middle"
              fill={colors.accent1}
              fontSize="11"
            >
              Binary Snapshot
            </text>

            {/* AOF */}
            <path
              d="M 140 140 L 180 140"
              stroke={colors.primary}
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            <text
              x="160"
              y="165"
              textAnchor="middle"
              fill={colors.primary}
              fontSize="12"
            >
              Write Ops
            </text>

            {/* AOF File */}
            <rect
              x="180"
              y="30"
              width="120"
              height="80"
              fill={colors.secondary}
              stroke={colors.accent3}
              strokeWidth="2"
              rx="8"
            />
            <text
              x="240"
              y="70"
              textAnchor="middle"
              fill={colors.accent3}
              fontSize="14"
              fontWeight="bold"
            >
              AOF Log
            </text>
            <text
              x="240"
              y="90"
              textAnchor="middle"
              fill={colors.accent1}
              fontSize="11"
            >
              Command Log
            </text>

            {/* Disk Storage */}
            <path
              d="M 300 75 L 340 75"
              stroke={colors.accent2}
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead2)"
            />
            <path
              d="M 300 75 L 340 75"
              stroke={colors.accent3}
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead3)"
            />

            <rect
              x="340"
              y="30"
              width="140"
              height="130"
              fill={colors.secondary}
              stroke={colors.accent2}
              strokeWidth="2"
              rx="8"
            />
            <text
              x="410"
              y="90"
              textAnchor="middle"
              fill={colors.accent2}
              fontSize="16"
              fontWeight="bold"
            >
              Persistent
            </text>
            <text
              x="410"
              y="115"
              textAnchor="middle"
              fill={colors.accent2}
              fontSize="16"
              fontWeight="bold"
            >
              Storage
            </text>

            {/* Recovery Arrow */}
            <path
              d="M 410 160 L 410 200"
              stroke={colors.accent4}
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead4)"
              strokeDasharray="5,5"
            />
            <text
              x="410"
              y="188"
              textAnchor="middle"
              fill={colors.accent4}
              fontSize="12"
            >
              Recovery
            </text>

            {/* Marker definitions */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill={colors.primary} />
              </marker>
              <marker
                id="arrowhead2"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill={colors.accent2} />
              </marker>
              <marker
                id="arrowhead3"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill={colors.accent3} />
              </marker>
              <marker
                id="arrowhead4"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill={colors.accent4} />
              </marker>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

// Replication Section
const ReplicationSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4" style={{ color: colors.text }}>
            Replication & High Availability
          </h2>
          <p style={{ color: colors.textSecondary }} className="text-lg max-w-2xl mx-auto">
            Keep your data safe across multiple nodes with automatic failover
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <svg viewBox="0 0 1000 350" className="w-full h-auto">
            {/* Master */}
            <rect
              x="350"
              y="20"
              width="140"
              height="100"
              fill={colors.secondary}
              stroke={colors.primary}
              strokeWidth="2"
              rx="8"
            />
            <text
              x="420"
              y="65"
              textAnchor="middle"
              fill={colors.primary}
              fontSize="16"
              fontWeight="bold"
            >
              Master
            </text>
            <text
              x="420"
              y="90"
              textAnchor="middle"
              fill={colors.accent1}
              fontSize="12"
            >
              Primary Node
            </text>

            {/* Replication arrows */}
            {[0, 120, 240].map((offset, idx) => (
              <g key={idx}>
                <path
                  d={`M ${400 + offset} 120 L ${380 + offset} 180`}
                  stroke={colors.accent1}
                  strokeWidth="2"
                  fill="none"
                />
                <polygon
                  points={`${380 + offset},180 ${375 + offset},170 ${385 + offset},175`}
                  fill={colors.accent1}
                />
              </g>
            ))}

            {/* Slave 1 */}
            <rect
              x="310"
              y="180"
              width="120"
              height="80"
              fill={colors.secondary}
              stroke={colors.accent1}
              strokeWidth="2"
              rx="8"
            />
            <text
              x="370"
              y="215"
              textAnchor="middle"
              fill={colors.accent1}
              fontSize="14"
              fontWeight="bold"
            >
              Slave 1
            </text>
            <text
              x="370"
              y="235"
              textAnchor="middle"
              fill={colors.textSecondary}
              fontSize="11"
            >
              Replica
            </text>

            {/* Slave 2 */}
            <rect
              x="460"
              y="180"
              width="120"
              height="80"
              fill={colors.secondary}
              stroke={colors.accent1}
              strokeWidth="2"
              rx="8"
            />
            <text
              x="520"
              y="215"
              textAnchor="middle"
              fill={colors.accent1}
              fontSize="14"
              fontWeight="bold"
            >
              Slave 2
            </text>
            <text
              x="520"
              y="235"
              textAnchor="middle"
              fill={colors.textSecondary}
              fontSize="11"
            >
              Replica
            </text>

            {/* Slave 3 */}
            <rect
              x="610"
              y="180"
              width="120"
              height="80"
              fill={colors.secondary}
              stroke={colors.accent1}
              strokeWidth="2"
              rx="8"
            />
            <text
              x="670"
              y="215"
              textAnchor="middle"
              fill={colors.accent1}
              fontSize="14"
              fontWeight="bold"
            >
              Slave 3
            </text>
            <text
              x="670"
              y="235"
              textAnchor="middle"
              fill={colors.textSecondary}
              fontSize="11"
            >
              Replica
            </text>

            {/* Failover */}
            <text
              x="100"
              y="280"
              fill={colors.accent2}
              fontSize="14"
              fontWeight="bold"
            >
              Sentinel Monitoring:
            </text>

            <circle
              cx="100"
              cy="320"
              r="30"
              fill={colors.secondary}
              stroke={colors.accent2}
              strokeWidth="2"
            />
            <text
              x="100"
              y="327"
              textAnchor="middle"
              fill={colors.accent2}
              fontSize="12"
              fontWeight="bold"
            >
              Sentinel
            </text>

            {/* Connection lines */}
            <path
              d="M 130 320 L 310 270"
              stroke={colors.accent2}
              strokeWidth="1"
              fill="none"
              strokeDasharray="3,3"
            />
            <path
              d="M 130 320 L 460 270"
              stroke={colors.accent2}
              strokeWidth="1"
              fill="none"
              strokeDasharray="3,3"
            />
            <path
              d="M 130 320 L 610 270"
              stroke={colors.accent2}
              strokeWidth="1"
              fill="none"
              strokeDasharray="3,3"
            />
            <path
              d="M 130 320 L 420 120"
              stroke={colors.accent2}
              strokeWidth="1"
              fill="none"
              strokeDasharray="3,3"
            />

            <text
              x="280"
              y="280"
              fill={colors.textSecondary}
              fontSize="11"
            >
              Monitors health & auto-failover
            </text>
          </svg>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Master-Slave Replication',
              points: [
                'One master, multiple slaves',
                'All writes go to master',
                'Slaves replicate automatically',
                'Read scaling across slaves',
              ],
              color: colors.accent1,
            },
            {
              title: 'Redis Sentinel',
              points: [
                'Monitors master/slave health',
                'Automatic failover on failure',
                'Configuration management',
                'Multi-Sentinel consensus',
              ],
              color: colors.accent2,
            },
            {
              title: 'Replication Benefits',
              points: [
                'High availability (HA)',
                'Read replicas for scaling',
                'Backup copies on slaves',
                'Zero downtime failover',
              ],
              color: colors.accent3,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl border backdrop-blur-xl"
              style={{
                backgroundColor: `${item.color}15`,
                borderColor: item.color,
              }}
            >
              <h3 className="font-bold text-lg mb-4" style={{ color: item.color }}>
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.points.map((point, pidx) => (
                  <li
                    key={pidx}
                    className="text-sm flex gap-2"
                    style={{ color: colors.textSecondary }}
                  >
                    <span style={{ color: item.color }}>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Scaling Section
const ScalingSection = () => {
  return (
    <section id="Scaling" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4" style={{ color: colors.text }}>
            Scaling Redis
          </h2>
          <p style={{ color: colors.textSecondary }} className="text-lg max-w-2xl mx-auto">
            From single instance to distributed cluster for massive scale
          </p>
        </motion.div>

        {/* Vertical Scaling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-8 rounded-2xl border backdrop-blur-xl"
          style={{
            backgroundColor: `${colors.accent1}10`,
            borderColor: colors.accent1,
          }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
            📈 Vertical Scaling (Single Node)
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4" style={{ color: colors.textSecondary }}>
                Upgrade a single Redis instance with more CPU and RAM:
              </p>
              <ul className="space-y-2">
                {[
                  'Simpler architecture',
                  'Lower latency (single node)',
                  'Easier to manage',
                  'Limited by single machine specs',
                  'Better for: Moderate loads (< 100GB)',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2" style={{ color: colors.textSecondary }}>
                    <span style={{ color: colors.accent1 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: `${colors.secondary}` }}
            >
              <code className="text-sm block space-y-2" style={{ color: colors.accent1 }}>
                <div>$ redis-server --port 6379</div>
                <div style={{ color: colors.textSecondary }}># Single powerful instance</div>
                <div style={{ color: colors.textSecondary }}>
                  # 128GB RAM, 16 CPU cores
                </div>
              </code>
            </div>
          </div>
        </motion.div>

        {/* Horizontal Scaling - Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-8 rounded-2xl border backdrop-blur-xl"
          style={{
            backgroundColor: `${colors.accent2}10`,
            borderColor: colors.accent2,
          }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
            🔀 Horizontal Scaling (Sharding)
          </h3>

          <svg viewBox="0 0 900 250" className="w-full h-auto mb-8">
            {/* Title */}
            <text
              x="450"
              y="30"
              textAnchor="middle"
              fill={colors.accent2}
              fontSize="14"
              fontWeight="bold"
            >
              Redis Cluster with 6 Nodes (3 Masters + 3 Replicas)
            </text>

            {/* Master nodes */}
            {[0, 150, 300].map((offset, idx) => (
              <g key={`master-${idx}`}>
                <rect
                  x={50 + offset}
                  y="70"
                  width="100"
                  height="70"
                  fill={colors.secondary}
                  stroke={colors.accent2}
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x={100 + offset}
                  y="105"
                  textAnchor="middle"
                  fill={colors.accent2}
                  fontSize="12"
                  fontWeight="bold"
                >
                  Master {idx + 1}
                </text>
                <text
                  x={100 + offset}
                  y="125"
                  textAnchor="middle"
                  fill={colors.textSecondary}
                  fontSize="10"
                >
                  Shard {idx + 1}
                </text>
              </g>
            ))}

            {/* Replication arrows */}
            {[0, 150, 300].map((offset, idx) => (
              <path
                key={`arrow-${idx}`}
                d={`M ${100 + offset} 140 L ${100 + offset} 180`}
                stroke={colors.accent1}
                strokeWidth="2"
                fill="none"
              />
            ))}

            {/* Replica nodes */}
            {[0, 150, 300].map((offset, idx) => (
              <g key={`replica-${idx}`}>
                <rect
                  x={50 + offset}
                  y="180"
                  width="100"
                  height="60"
                  fill={colors.secondary}
                  stroke={colors.accent1}
                  strokeWidth="2"
                  rx="8"
                />
                <text
                  x={100 + offset}
                  y="210"
                  textAnchor="middle"
                  fill={colors.accent1}
                  fontSize="12"
                  fontWeight="bold"
                >
                  Replica {idx + 1}
                </text>
              </g>
            ))}

            {/* Cluster interconnect */}
            <g opacity="0.3">
              <line x1="100" y1="100" x2="250" y2="100" stroke={colors.accent2} strokeWidth="1" />
              <line x1="250" y1="100" x2="400" y2="100" stroke={colors.accent2} strokeWidth="1" />
              <line x1="150" y1="100" x2="150" y2="180" stroke={colors.accent1} strokeWidth="1" />
              <line
                x1="300"
                y1="100"
                x2="300"
                y2="180"
                stroke={colors.accent1}
                strokeWidth="1"
              />
              <line
                x1="450"
                y1="100"
                x2="450"
                y2="180"
                stroke={colors.accent1}
                strokeWidth="1"
              />
            </g>
          </svg>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-3" style={{ color: colors.accent2 }}>
                Key Features:
              </p>
              <ul className="space-y-2">
                {[
                  'Data split across multiple masters',
                  'Each node handles subset of keys',
                  'CRC16 hash slot calculation',
                  '16384 total hash slots',
                  'Automatic failover with replicas',
                  'Minimal downtime during resharding',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2" style={{ color: colors.textSecondary }}>
                    <span style={{ color: colors.accent2 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: `${colors.secondary}` }}
            >
              <code className="text-sm block space-y-2" style={{ color: colors.accent2 }}>
                <div>$ redis-cli --cluster create</div>
                <div>host1:6379 host2:6379 host3:6379</div>
                <div>host4:6379 host5:6379 host6:6379</div>
                <div style={{ color: colors.textSecondary }}># Creates 6-node cluster</div>
              </code>
            </div>
          </div>
        </motion.div>

        {/* Redis on Flash */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border backdrop-blur-xl"
          style={{
            backgroundColor: `${colors.accent3}10`,
            borderColor: colors.accent3,
          }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
            💿 Redis on Flash (Extended Memory)
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4" style={{ color: colors.textSecondary }}>
                Use SSDs for less-frequently accessed data while keeping hot data in RAM:
              </p>
              <ul className="space-y-2">
                {[
                  '10-50x more capacity than RAM',
                  'Still much faster than disk databases',
                  'Automatic hot/cold data management',
                  'Perfect for: Datasets larger than memory',
                  'Enterprise feature with performance trade-off',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2" style={{ color: colors.textSecondary }}>
                    <span style={{ color: colors.accent3 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-4 rounded-lg"
              style={{ backgroundColor: `${colors.secondary}` }}
            >
              <svg viewBox="0 0 300 200" className="w-full h-auto">
                {/* RAM */}
                <rect
                  x="20"
                  y="20"
                  width="100"
                  height="150"
                  fill={colors.secondary}
                  stroke={colors.accent1}
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x="70"
                  y="40"
                  textAnchor="middle"
                  fill={colors.accent1}
                  fontSize="12"
                  fontWeight="bold"
                >
                  RAM
                </text>
                <text
                  x="70"
                  y="100"
                  textAnchor="middle"
                  fill={colors.accent1}
                  fontSize="11"
                >
                  Hot Data
                </text>
                <text
                  x="70"
                  y="140"
                  textAnchor="middle"
                  fill={colors.textSecondary}
                  fontSize="10"
                >
                  64GB
                </text>

                {/* Arrow */}
                <path
                  d="M 120 95 L 160 95"
                  stroke={colors.accent3}
                  strokeWidth="2"
                  fill="none"
                />
                <polygon points="160,95 150,90 150,100" fill={colors.accent3} />

                {/* SSD/Flash */}
                <rect
                  x="160"
                  y="20"
                  width="120"
                  height="150"
                  fill={colors.secondary}
                  stroke={colors.accent3}
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x="220"
                  y="40"
                  textAnchor="middle"
                  fill={colors.accent3}
                  fontSize="12"
                  fontWeight="bold"
                >
                  SSD/Flash
                </text>
                <text
                  x="220"
                  y="100"
                  textAnchor="middle"
                  fill={colors.accent3}
                  fontSize="11"
                >
                  Cold Data
                </text>
                <text
                  x="220"
                  y="140"
                  textAnchor="middle"
                  fill={colors.textSecondary}
                  fontSize="10"
                >
                  1TB+
                </text>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Use Cases Section
const UseCasesSection = () => {
  const useCases = [
    {
      title: 'Session Store',
      description: 'Store user sessions with automatic expiration',
      benefits: ['Fast access', 'TTL support', 'Distributed sessions'],
      color: colors.accent1,
      icon: '👤',
    },
    {
      title: 'Real-time Leaderboards',
      description: 'Sorted sets for rankings and scores',
      benefits: ['O(log N) operations', 'Real-time updates', 'Flexible scoring'],
      color: colors.accent2,
      icon: '🏆',
    },
    {
      title: 'Chat & Messaging',
      description: 'Streams and pub/sub for instant messaging',
      benefits: ['Message queuing', 'Consumer groups', 'Message persistence'],
      color: colors.accent3,
      icon: '💬',
    },
    {
      title: 'Rate Limiting',
      description: 'Implement token bucket or sliding window',
      benefits: ['Sub-millisecond checks', 'Atomic increments', 'Cost-effective'],
      color: colors.accent4,
      icon: '⏱️',
    },
    {
      title: 'Analytics & Counters',
      description: 'Track metrics, page views, click counters',
      benefits: ['Fast increments', 'Real-time stats', 'HyperLogLog cardinality'],
      color: colors.primary,
      icon: '📊',
    },
    {
      title: 'Job Queue',
      description: 'Background job processing with Redis lists',
      benefits: ['FIFO ordering', 'Retries', 'Multiple workers'],
      color: colors.accent1,
      icon: '⚙️',
    },
  ];

  return (
    <section id="UseCases" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4" style={{ color: colors.text }}>
            Real-World Use Cases
          </h2>
          <p style={{ color: colors.textSecondary }} className="text-lg max-w-2xl mx-auto">
            How Redis solves common problems in production systems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 rounded-xl border backdrop-blur-xl cursor-pointer group"
              style={{
                backgroundColor: `${useCase.color}15`,
                borderColor: useCase.color,
              }}
            >
              <div className="text-5xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: useCase.color }}>
                {useCase.title}
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: colors.textSecondary }}
              >
                {useCase.description}
              </p>
              <div className="space-y-1">
                {useCase.benefits.map((benefit, bidx) => (
                  <p
                    key={bidx}
                    className="text-xs flex gap-2"
                    style={{ color: colors.textSecondary }}
                  >
                    <span style={{ color: useCase.color }}>✓</span>
                    {benefit}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Comparison Section
const ComparisonSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4" style={{ color: colors.text }}>
            Redis vs Alternatives
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-2xl border backdrop-blur-xl"
          style={{ borderColor: colors.primary }}
        >
          <table className="w-full">
            <thead>
              <tr
                style={{
                  backgroundColor: `${colors.primary}20`,
                  borderBottomColor: colors.primary,
                }}
              >
                {['Feature', 'Redis', 'Memcached', 'Database'].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-4 text-left font-bold"
                    style={{ color: colors.primary }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Speed', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐'],
                ['Data Types', 'Rich (10+)', 'Simple', 'Complex'],
                ['Persistence', '✓ (RDB/AOF)', '✗', '✓'],
                ['Pub/Sub', '✓', '✗', 'Limited'],
                ['Transactions', '✓', '✗', '✓'],
                ['Replication', '✓', '✗', '✓'],
                ['Cluster', '✓ Native', 'Manual', '✓'],
                ['Memory Use', 'Optimized', 'Minimal', 'N/A'],
              ].map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottomColor: `${colors.primary}20`,
                    backgroundColor: idx % 2 === 0 ? `${colors.secondary}` : 'transparent',
                  }}
                >
                  {row.map((cell, cidx) => (
                    <td
                      key={cidx}
                      className="px-6 py-4"
                      style={{
                        color:
                          cidx === 0
                            ? colors.primary
                            : cidx === 1
                              ? colors.accent1
                              : colors.textSecondary,
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 px-6 border-t"
      style={{
        backgroundColor: colors.secondary,
        borderColor: `${colors.primary}40`,
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p style={{ color: colors.textSecondary }} className="mb-4">
          Redis Guide - Master the In-Memory Database
        </p>
        <p style={{ color: colors.textSecondary }} className="text-sm">
          Comprehensive guide for developers and architects
        </p>
      </div>
    </motion.footer>
  );
};

// Main App Component
export default function RedisGuide() {
  return (
    <div style={{ backgroundColor: colors.bg, color: colors.text, minHeight: '100vh' }}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body, html {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        
        code {
          font-family: 'Monaco', 'Courier New', monospace;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${colors.secondary};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${colors.primary};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${colors.primary}dd;
        }
      `}</style>

      <Header />
      <HeroSection />
      <ConceptsSection />
      <DataTypesSection />
      <CachingSection />
      <PersistenceSection />
      <ReplicationSection />
      <ScalingSection />
      <UseCasesSection />
      <ComparisonSection />
      <Footer />
    </div>
  );
}
