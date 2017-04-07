var searchIndex = {};
searchIndex["mio"] = {"doc":"A fast, low-level IO library for Rust focusing on non-blocking APIs, event\nnotification, and other useful utilities for building high performance IO\napps.","items":[[11,"deref_mut","iovec","",0,null],[11,"deref","","",0,null],[3,"IoVec","mio","A specialized byte slice type for performing vectored I/O operations.",null,null],[3,"Poll","","Polls for readiness events on all registered values.",null,null],[3,"Registration","","Handle to a user space `Poll` registration.",null,null],[3,"SetReadiness","","Updates the readiness state of the associated [`Registration`].",null,null],[3,"PollOpt","","Options supplied when registering an `Evented` handle with `Poll`",null,null],[3,"Ready","","A set of readiness event kinds",null,null],[3,"Token","","Associates readiness notifications with [`Evented`] handles.",null,null],[12,"0","","",1,null],[3,"Events","","A collection of readiness events.",null,null],[3,"Event","","An readiness event returned by [`Poll::poll`].",null,null],[3,"EventsIter","","[`Events`] iterator.",null,null],[5,"would_block","","Returns a std `WouldBlock` error without allocating",null,{"inputs":[],"output":{"name":"error"}}],[11,"cmp","","",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":{"name":"option"}}],[11,"lt","","",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"le","","",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"gt","","",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"ge","","",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"pollopt"}],"output":{"name":"pollopt"}}],[11,"eq","","",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"empty","","Return a `PollOpt` representing no set options.",2,{"inputs":[],"output":{"name":"pollopt"}}],[11,"edge","","Return a `PollOpt` representing edge-triggered notifications.",2,{"inputs":[],"output":{"name":"pollopt"}}],[11,"level","","Return a `PollOpt` representing level-triggered notifications.",2,{"inputs":[],"output":{"name":"pollopt"}}],[11,"oneshot","","Return a `PollOpt` representing oneshot notifications.",2,{"inputs":[],"output":{"name":"pollopt"}}],[11,"is_edge","","Returns true if the options include edge-triggered notifications.",2,{"inputs":[{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"is_level","","Returns true if the options include level-triggered notifications.",2,{"inputs":[{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"is_oneshot","","Returns true if the options includes oneshot.",2,{"inputs":[{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"contains","","Returns true if `self` is a superset of `other`.",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":{"name":"bool"}}],[11,"insert","","Adds all options represented by `other` into `self`.",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":null}],[11,"remove","","Removes all options represented by `other` from `self`.",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":null}],[11,"bitor","","",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":{"name":"pollopt"}}],[11,"bitxor","","",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":{"name":"pollopt"}}],[11,"bitand","","",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":{"name":"pollopt"}}],[11,"sub","","",2,{"inputs":[{"name":"pollopt"},{"name":"pollopt"}],"output":{"name":"pollopt"}}],[11,"not","","",2,{"inputs":[{"name":"pollopt"}],"output":{"name":"pollopt"}}],[11,"fmt","","",2,{"inputs":[{"name":"pollopt"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cmp","","",3,{"inputs":[{"name":"ready"},{"name":"ready"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",3,{"inputs":[{"name":"ready"},{"name":"ready"}],"output":{"name":"option"}}],[11,"lt","","",3,{"inputs":[{"name":"ready"},{"name":"ready"}],"output":{"name":"bool"}}],[11,"le","","",3,{"inputs":[{"name":"ready"},{"name":"ready"}],"output":{"name":"bool"}}],[11,"gt","","",3,{"inputs":[{"name":"ready"},{"name":"ready"}],"output":{"name":"bool"}}],[11,"ge","","",3,{"inputs":[{"name":"ready"},{"name":"ready"}],"output":{"name":"bool"}}],[11,"clone","","",3,{"inputs":[{"name":"ready"}],"output":{"name":"ready"}}],[11,"eq","","",3,{"inputs":[{"name":"ready"},{"name":"ready"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"ready"},{"name":"ready"}],"output":{"name":"bool"}}],[11,"empty","","Returns the empty `Ready` set.",3,{"inputs":[],"output":{"name":"ready"}}],[11,"readable","","Returns a `Ready` representing readable readiness.",3,{"inputs":[],"output":{"name":"ready"}}],[11,"writable","","Returns a `Ready` representing writable readiness.",3,{"inputs":[],"output":{"name":"ready"}}],[11,"is_empty","","Returns true if `Ready` is the empty set",3,{"inputs":[{"name":"ready"}],"output":{"name":"bool"}}],[11,"is_readable","","Returns true if the value includes readable readiness",3,{"inputs":[{"name":"ready"}],"output":{"name":"bool"}}],[11,"is_writable","","Returns true if the value includes writable readiness",3,{"inputs":[{"name":"ready"}],"output":{"name":"bool"}}],[11,"insert","","Adds all readiness represented by `other` into `self`.",3,{"inputs":[{"name":"ready"},{"name":"t"}],"output":null}],[11,"remove","","Removes all options represented by `other` from `self`.",3,{"inputs":[{"name":"ready"},{"name":"t"}],"output":null}],[11,"contains","","Returns true if `self` is a superset of `other`.",3,{"inputs":[{"name":"ready"},{"name":"t"}],"output":{"name":"bool"}}],[11,"bitor","","",3,{"inputs":[{"name":"ready"},{"name":"t"}],"output":{"name":"ready"}}],[11,"bitxor","","",3,{"inputs":[{"name":"ready"},{"name":"t"}],"output":{"name":"ready"}}],[11,"bitand","","",3,{"inputs":[{"name":"ready"},{"name":"t"}],"output":{"name":"ready"}}],[11,"sub","","",3,{"inputs":[{"name":"ready"},{"name":"t"}],"output":{"name":"ready"}}],[11,"not","","",3,{"inputs":[{"name":"ready"}],"output":{"name":"ready"}}],[11,"fmt","","",3,{"inputs":[{"name":"ready"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"event"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",4,{"inputs":[{"name":"event"},{"name":"event"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"event"},{"name":"event"}],"output":{"name":"bool"}}],[11,"clone","","",4,{"inputs":[{"name":"event"}],"output":{"name":"event"}}],[11,"new","","Creates a new `Event` containing `readiness` and `token`",4,{"inputs":[{"name":"ready"},{"name":"token"}],"output":{"name":"event"}}],[11,"readiness","","Returns the event&#39;s readiness.",4,{"inputs":[{"name":"event"}],"output":{"name":"ready"}}],[11,"token","","Returns the event&#39;s token.",4,{"inputs":[{"name":"event"}],"output":{"name":"token"}}],[11,"read_to_end","mio::io","Read all bytes until EOF in this source, placing them into `buf`.",5,{"inputs":[{"name":"read"},{"name":"vec"}],"output":{"name":"result"}}],[11,"read_to_string","","Read all bytes until EOF in this source, placing them into `buf`.",5,{"inputs":[{"name":"read"},{"name":"string"}],"output":{"name":"result"}}],[11,"read_exact","","Read the exact number of bytes required to fill `buf`.",5,null],[11,"by_ref","","Creates a &quot;by reference&quot; adaptor for this instance of `Read`.",5,{"inputs":[{"name":"read"}],"output":{"name":"self"}}],[11,"bytes","","Transforms this `Read` instance to an `Iterator` over its bytes.",5,{"inputs":[{"name":"read"}],"output":{"name":"bytes"}}],[11,"chars","","Transforms this `Read` instance to an `Iterator` over `char`s.",5,{"inputs":[{"name":"read"}],"output":{"name":"chars"}}],[11,"chain","","Creates an adaptor which will chain this stream with another.",5,{"inputs":[{"name":"read"},{"name":"r"}],"output":{"name":"chain"}}],[11,"take","","Creates an adaptor which will read at most `limit` bytes from it.",5,{"inputs":[{"name":"read"},{"name":"u64"}],"output":{"name":"take"}}],[11,"write_all","","Attempts to write an entire buffer into this write.",6,null],[11,"write_fmt","","Writes a formatted string into this writer, returning any error\nencountered.",6,{"inputs":[{"name":"write"},{"name":"arguments"}],"output":{"name":"result"}}],[11,"by_ref","","Creates a &quot;by reference&quot; adaptor for this instance of `Write`.",6,{"inputs":[{"name":"write"}],"output":{"name":"self"}}],[11,"clone","mio","",7,{"inputs":[{"name":"setreadiness"}],"output":{"name":"setreadiness"}}],[11,"new","","Return a new `Poll` handle.",8,{"inputs":[],"output":{"name":"result"}}],[11,"register","","Register an `Evented` handle with the `Poll` instance.",8,{"inputs":[{"name":"poll"},{"name":"e"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","Re-register an `Evented` handle with the `Poll` instance.",8,{"inputs":[{"name":"poll"},{"name":"e"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","Deregister an `Evented` handle with the `Poll` instance.",8,{"inputs":[{"name":"poll"},{"name":"e"}],"output":{"name":"result"}}],[11,"poll","","Wait for readiness events",8,{"inputs":[{"name":"poll"},{"name":"events"},{"name":"option"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"poll"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"eventsiter"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"with_capacity","","Return a new `Events` capable of holding up to `capacity` events.",10,{"inputs":[{"name":"usize"}],"output":{"name":"events"}}],[11,"get","","Returns the `Event` at the given index, or `None` if the index is out of\nbounds.",10,{"inputs":[{"name":"events"},{"name":"usize"}],"output":{"name":"option"}}],[11,"len","","Returns the number of `Event` values currently in `self`.",10,{"inputs":[{"name":"events"}],"output":{"name":"usize"}}],[11,"capacity","","Returns the number of `Event` values that `self` can hold.",10,{"inputs":[{"name":"events"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns `true` if `self` contains no `Event` values.",10,{"inputs":[{"name":"events"}],"output":{"name":"bool"}}],[11,"iter","","Returns an iterator over the `Event` values.",10,{"inputs":[{"name":"events"}],"output":{"name":"iter"}}],[11,"next","","",9,{"inputs":[{"name":"eventsiter"}],"output":{"name":"option"}}],[11,"fmt","","",10,{"inputs":[{"name":"events"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new2","","Create and return a new `Registration` and the associated\n`SetReadiness`.",11,null],[11,"register","","",11,{"inputs":[{"name":"registration"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","",11,{"inputs":[{"name":"registration"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","",11,{"inputs":[{"name":"registration"},{"name":"poll"}],"output":{"name":"result"}}],[11,"drop","","",11,{"inputs":[{"name":"registration"}],"output":null}],[11,"fmt","","",11,{"inputs":[{"name":"registration"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"readiness","","Returns the registration&#39;s current readiness.",7,{"inputs":[{"name":"setreadiness"}],"output":{"name":"ready"}}],[11,"set_readiness","","Set the registration&#39;s readiness",7,{"inputs":[{"name":"setreadiness"},{"name":"ready"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"setreadiness"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",3,{"inputs":[{"name":"unixready"}],"output":{"name":"ready"}}],[11,"hash","","",1,null],[11,"cmp","","",1,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"option"}}],[11,"lt","","",1,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"le","","",1,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"gt","","",1,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"ge","","",1,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"eq","","",1,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"token"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"token"}],"output":{"name":"token"}}],[11,"from","","",1,{"inputs":[{"name":"usize"}],"output":{"name":"token"}}],[0,"net","","Networking primitives",null,null],[3,"TcpListener","mio::net","A structure representing a socket server",null,null],[3,"TcpStream","","A non-blocking TCP stream between a local socket and a remote socket.",null,null],[3,"UdpSocket","","A User Datagram Protocol socket.",null,null],[11,"fmt","","",12,{"inputs":[{"name":"tcpstream"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"connect","","Create a new TCP stream and issue a non-blocking connect to the\nspecified address.",12,{"inputs":[{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"connect_stream","","Creates a new `TcpStream` from the pending socket inside the given\n`std::net::TcpBuilder`, connecting it to the address specified.",12,{"inputs":[{"name":"tcpstream"},{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"from_stream","","Creates a new `TcpStream` from a standard `net::TcpStream`.",12,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"peer_addr","","Returns the socket address of the remote peer of this TCP connection.",12,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the socket address of the local half of this TCP connection.",12,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"try_clone","","Creates a new independently owned handle to the underlying socket.",12,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"shutdown","","Shuts down the read, write, or both halves of this connection.",12,{"inputs":[{"name":"tcpstream"},{"name":"shutdown"}],"output":{"name":"result"}}],[11,"set_nodelay","","Sets the value of the `TCP_NODELAY` option on this socket.",12,{"inputs":[{"name":"tcpstream"},{"name":"bool"}],"output":{"name":"result"}}],[11,"nodelay","","Gets the value of the `TCP_NODELAY` option on this socket.",12,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"set_keepalive_ms","","Sets whether keepalive messages are enabled to be sent on this socket.",12,{"inputs":[{"name":"tcpstream"},{"name":"option"}],"output":{"name":"result"}}],[11,"keepalive_ms","","Returns whether keepalive messages are enabled on this socket, and if so\nthe amount of milliseconds between them.",12,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",12,{"inputs":[{"name":"tcpstream"},{"name":"u32"}],"output":{"name":"result"}}],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",12,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",12,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"read_bufs","","Read in a list of buffers all at once.",12,null],[11,"write_bufs","","Write a list of buffers all at once.",12,null],[11,"read","","",12,null],[11,"write","","",12,null],[11,"flush","","",12,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"register","","",12,{"inputs":[{"name":"tcpstream"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","",12,{"inputs":[{"name":"tcpstream"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","",12,{"inputs":[{"name":"tcpstream"},{"name":"poll"}],"output":{"name":"result"}}],[11,"fmt","","",13,{"inputs":[{"name":"tcplistener"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"bind","","Convenience method to bind a new TCP listener to the specified address\nto receive new connections.",13,{"inputs":[{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"from_listener","","Creates a new `TcpListener` from an instance of a\n`std::net::TcpListener` type.",13,{"inputs":[{"name":"tcplistener"},{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"accept","","Accepts a new `TcpStream`.",13,{"inputs":[{"name":"tcplistener"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the local socket address of this listener.",13,{"inputs":[{"name":"tcplistener"}],"output":{"name":"result"}}],[11,"try_clone","","Creates a new independently owned handle to the underlying socket.",13,{"inputs":[{"name":"tcplistener"}],"output":{"name":"result"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",13,{"inputs":[{"name":"tcplistener"},{"name":"u32"}],"output":{"name":"result"}}],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",13,{"inputs":[{"name":"tcplistener"}],"output":{"name":"result"}}],[11,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",13,{"inputs":[{"name":"tcplistener"},{"name":"bool"}],"output":{"name":"result"}}],[11,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",13,{"inputs":[{"name":"tcplistener"}],"output":{"name":"result"}}],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",13,{"inputs":[{"name":"tcplistener"}],"output":{"name":"result"}}],[11,"register","","",13,{"inputs":[{"name":"tcplistener"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","",13,{"inputs":[{"name":"tcplistener"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","",13,{"inputs":[{"name":"tcplistener"},{"name":"poll"}],"output":{"name":"result"}}],[11,"into_raw_fd","","",12,{"inputs":[{"name":"tcpstream"}],"output":{"name":"rawfd"}}],[11,"as_raw_fd","","",12,{"inputs":[{"name":"tcpstream"}],"output":{"name":"rawfd"}}],[11,"from_raw_fd","","",12,{"inputs":[{"name":"rawfd"}],"output":{"name":"tcpstream"}}],[11,"into_raw_fd","","",13,{"inputs":[{"name":"tcplistener"}],"output":{"name":"rawfd"}}],[11,"as_raw_fd","","",13,{"inputs":[{"name":"tcplistener"}],"output":{"name":"rawfd"}}],[11,"from_raw_fd","","",13,{"inputs":[{"name":"rawfd"}],"output":{"name":"tcplistener"}}],[11,"fmt","","",14,{"inputs":[{"name":"udpsocket"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"bind","","Creates a UDP socket from the given address.",14,{"inputs":[{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"from_socket","","Creates a new mio-wrapped socket from an underlying and bound std\nsocket.",14,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the socket address that this socket was created from.",14,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"try_clone","","Creates a new independently owned handle to the underlying socket.",14,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"send_to","","Sends data on the socket to the given address. On success, returns the\nnumber of bytes written.",14,null],[11,"recv_from","","Receives data from the socket. On success, returns the number of bytes\nread and the address from whence the data came.",14,null],[11,"send","","Sends data on the socket to the address previously bound via connect(). On success,\nreturns the number of bytes written.",14,null],[11,"recv","","Receives data from the socket previously bound with connect(). On success, returns\nthe number of bytes read and the address from whence the data came.",14,null],[11,"connect","","Connects the UDP socket setting the default destination for `send()`\nand limiting packets that are read via `recv` from the address specified\nin `addr`.",14,{"inputs":[{"name":"udpsocket"},{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"broadcast","","Gets the value of the `SO_BROADCAST` option for this socket.",14,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"set_broadcast","","Sets the value of the `SO_BROADCAST` option for this socket.",14,{"inputs":[{"name":"udpsocket"},{"name":"bool"}],"output":{"name":"result"}}],[11,"multicast_loop_v4","","Gets the value of the `IP_MULTICAST_LOOP` option for this socket.",14,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"set_multicast_loop_v4","","Sets the value of the `IP_MULTICAST_LOOP` option for this socket.",14,{"inputs":[{"name":"udpsocket"},{"name":"bool"}],"output":{"name":"result"}}],[11,"multicast_ttl_v4","","Gets the value of the `IP_MULTICAST_TTL` option for this socket.",14,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"set_multicast_ttl_v4","","Sets the value of the `IP_MULTICAST_TTL` option for this socket.",14,{"inputs":[{"name":"udpsocket"},{"name":"u32"}],"output":{"name":"result"}}],[11,"multicast_loop_v6","","Gets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",14,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"set_multicast_loop_v6","","Sets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",14,{"inputs":[{"name":"udpsocket"},{"name":"bool"}],"output":{"name":"result"}}],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",14,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",14,{"inputs":[{"name":"udpsocket"},{"name":"u32"}],"output":{"name":"result"}}],[11,"join_multicast_v4","","Executes an operation of the `IP_ADD_MEMBERSHIP` type.",14,{"inputs":[{"name":"udpsocket"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[11,"join_multicast_v6","","Executes an operation of the `IPV6_ADD_MEMBERSHIP` type.",14,{"inputs":[{"name":"udpsocket"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[11,"leave_multicast_v4","","Executes an operation of the `IP_DROP_MEMBERSHIP` type.",14,{"inputs":[{"name":"udpsocket"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[11,"leave_multicast_v6","","Executes an operation of the `IPV6_DROP_MEMBERSHIP` type.",14,{"inputs":[{"name":"udpsocket"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",14,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"register","","",14,{"inputs":[{"name":"udpsocket"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","",14,{"inputs":[{"name":"udpsocket"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","",14,{"inputs":[{"name":"udpsocket"},{"name":"poll"}],"output":{"name":"result"}}],[11,"into_raw_fd","","",14,{"inputs":[{"name":"udpsocket"}],"output":{"name":"rawfd"}}],[11,"as_raw_fd","","",14,{"inputs":[{"name":"udpsocket"}],"output":{"name":"rawfd"}}],[11,"from_raw_fd","","",14,{"inputs":[{"name":"rawfd"}],"output":{"name":"udpsocket"}}],[0,"event","mio","Readiness event types and utilities.",null,null],[3,"Events","mio::event","A collection of readiness events.",null,null],[3,"Iter","","[`Events`] iterator.",null,null],[3,"Event","","An readiness event returned by [`Poll::poll`].",null,null],[8,"Evented","","A value that may be registered with `Poll`",null,null],[10,"register","","Register `self` with the given `Poll` instance.",15,{"inputs":[{"name":"evented"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[10,"reregister","","Re-register `self` with the given `Poll` instance.",15,{"inputs":[{"name":"evented"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[10,"deregister","","Deregister `self` from the given `Poll` instance",15,{"inputs":[{"name":"evented"},{"name":"poll"}],"output":{"name":"result"}}],[0,"unix","mio","Unix only extensions",null,null],[3,"EventedFd","mio::unix","Adapter for [`RawFd`] providing an [`Evented`] implementation.",null,null],[12,"0","","",16,null],[3,"UnixReady","","Unix specific extensions to `Ready`",null,null],[8,"Evented","mio","A value that may be registered with `Poll`",null,null],[10,"register","","Register `self` with the given `Poll` instance.",15,{"inputs":[{"name":"evented"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[10,"reregister","","Re-register `self` with the given `Poll` instance.",15,{"inputs":[{"name":"evented"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[10,"deregister","","Deregister `self` from the given `Poll` instance",15,{"inputs":[{"name":"evented"},{"name":"poll"}],"output":{"name":"result"}}],[11,"fmt","mio::unix","",16,{"inputs":[{"name":"eventedfd"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"register","","",16,{"inputs":[{"name":"eventedfd"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","",16,{"inputs":[{"name":"eventedfd"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","",16,{"inputs":[{"name":"eventedfd"},{"name":"poll"}],"output":{"name":"result"}}],[11,"cmp","","",17,{"inputs":[{"name":"unixready"},{"name":"unixready"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",17,{"inputs":[{"name":"unixready"},{"name":"unixready"}],"output":{"name":"option"}}],[11,"lt","","",17,{"inputs":[{"name":"unixready"},{"name":"unixready"}],"output":{"name":"bool"}}],[11,"le","","",17,{"inputs":[{"name":"unixready"},{"name":"unixready"}],"output":{"name":"bool"}}],[11,"gt","","",17,{"inputs":[{"name":"unixready"},{"name":"unixready"}],"output":{"name":"bool"}}],[11,"ge","","",17,{"inputs":[{"name":"unixready"},{"name":"unixready"}],"output":{"name":"bool"}}],[11,"clone","","",17,{"inputs":[{"name":"unixready"}],"output":{"name":"unixready"}}],[11,"eq","","",17,{"inputs":[{"name":"unixready"},{"name":"unixready"}],"output":{"name":"bool"}}],[11,"ne","","",17,{"inputs":[{"name":"unixready"},{"name":"unixready"}],"output":{"name":"bool"}}],[11,"fmt","","",17,{"inputs":[{"name":"unixready"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"error","","Returns a `Ready` representing error readiness.",17,{"inputs":[],"output":{"name":"unixready"}}],[11,"hup","","Returns a `Ready` representing HUP readiness.",17,{"inputs":[],"output":{"name":"unixready"}}],[11,"is_error","","Returns true if the value includes error readiness",17,{"inputs":[{"name":"unixready"}],"output":{"name":"bool"}}],[11,"is_hup","","Returns true if the value includes HUP readiness",17,{"inputs":[{"name":"unixready"}],"output":{"name":"bool"}}],[11,"from","","",17,{"inputs":[{"name":"ready"}],"output":{"name":"unixready"}}],[11,"deref","","",17,{"inputs":[{"name":"unixready"}],"output":{"name":"ready"}}],[11,"deref_mut","","",17,{"inputs":[{"name":"unixready"}],"output":{"name":"ready"}}],[11,"bitor","","",17,{"inputs":[{"name":"unixready"},{"name":"unixready"}],"output":{"name":"unixready"}}],[11,"bitxor","","",17,{"inputs":[{"name":"unixready"},{"name":"unixready"}],"output":{"name":"unixready"}}],[11,"bitand","","",17,{"inputs":[{"name":"unixready"},{"name":"unixready"}],"output":{"name":"unixready"}}],[11,"sub","","",17,{"inputs":[{"name":"unixready"},{"name":"unixready"}],"output":{"name":"unixready"}}],[11,"not","","",17,{"inputs":[{"name":"unixready"}],"output":{"name":"unixready"}}]],"paths":[[3,"IoVec"],[3,"Token"],[3,"PollOpt"],[3,"Ready"],[3,"Event"],[8,"Read"],[8,"Write"],[3,"SetReadiness"],[3,"Poll"],[3,"EventsIter"],[3,"Events"],[3,"Registration"],[3,"TcpStream"],[3,"TcpListener"],[3,"UdpSocket"],[8,"Evented"],[3,"EventedFd"],[3,"UnixReady"]]};
initSearch(searchIndex);
